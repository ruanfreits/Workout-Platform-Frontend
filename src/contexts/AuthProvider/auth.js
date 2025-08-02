import { React, createContext, useEffect, useState } from "react";
import {BACKEND_URL} from "../../config/index.js"
import {getUserLocalStorage, setUserLocalStorage} from "../AuthProvider/utils"
import axios from "axios";

axios.defaults.withCredentials = true;
// const BACKEND_URL= process.env.REACT_APP_URL;

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserLocalStorage());
  const [loading, setLoading] = useState(true);
  //Substituir por uma requisição no BACKEND
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/auth/api/alunos/validate-token`, {
          withCredentials: true,
        });
  
        // console.log("Token válido:", res.data);
  
        // const userData = res.data;
  
        // setUser(userData);
        // setUserLocalStorage(userData);
      } catch (err) {
        console.error("Token inválido:", err.response?.data || err.message);
        setUser(null);
        localStorage.removeItem("u");
      } finally {
        setLoading(false); // 🔥 ESSENCIAL para não travar sua interface
      }
    };
  
    fetchUser();
  }, []);


  const signin = async(email, password) => {

    try{
    const response = await axios.post(`${BACKEND_URL}/auth/api/alunos/login`, { email: email, password: password})
    .then(response =>{ return response})
    .catch(error =>{ return error.response})

    if(response.status === 200) {
      console.log(response.data);
      const payload ={
        id: response.data.alunoId,
        email: response.data.email, 
        nome: response.data.nome, 
        idade: response.data.idade, 
        altura: response.data.altura, 
        telefone: response.data.telefone,
        imageName: response.data.imageName};

      setUser(payload);

      setUserLocalStorage(payload);
          
      return "Login bem-sucedido";
          
      } else if(response.status === 404){ return "Usuário não encontrado" }
       if(response.status === 401){ return "Email ou senha Incorretos" }
      }catch(error){
        console.log(error);
        return "Error inesperado ao fazer login";
    }
  }


  const signup = async(nome, email, password) => {
    try{
    //Envio de Requisição para o Backend Criação de Usuário
    const response = await axios.post(`${BACKEND_URL}/auth/api/alunos/signup`, {
      name: nome,
      email: email,
      password: password
    }).then(response =>{ console.log(response.status)
    return response})
      .catch(error => {console.log(error.response)
      return error.response});
    
    if(response.status === 200) {
      return "SingUp bem-sucedido";
    }
    if(response.status === 409){
      return "Já existe uma conta com esse Email"
    }

    
  }
    catch(error){
      console.log(error)
      return "Error inesperado ao fazer login";
    }
  };


  const signout = async () => {
    try{
    const response = await axios.post(`${BACKEND_URL}/auth/api/alunos/logout`)
    .then(response =>{ return response})
    .catch(error =>{ return error.response})
    
    setUser(null);
    localStorage.removeItem("u");
    return response;
    }
    catch(error){
      return;
    }
  };

//Solicita o envio de Email para que seja feito a recuperação de senha
  const recoverpassword= async (email)=>{
    //Envio de Requisição, criação de link para criar nova senha
      const response = await axios.put(`${BACKEND_URL}/auth/api/alunos/recoverpassword/${email}`)
      .then( (response) => {return response;})
      .catch(error => { return error.response});

      if(response.data.userAlreadyexist === "false"){
        return "Não existe usuário cadastrado com esse email"
      }
      
      return;
  }

  //Determina a nova senha do usuário
  const setnewpassword = async (newpassword,tokenResetPass)=>{
    //Envio de Requisição para o Backend Criação de Usuário
    const response = await axios.put(`${BACKEND_URL}/auth/api/alunos/setpassword/${newpassword}/${tokenResetPass}`)
    .then( (response) => {console.log(response.data);
      return response;
    })
    .catch(error => {console.log(error);
    return error.response;}
    );   
    return response.status;
}


//Valida o Token utilizado para resetar a senha
const checkTokenResetPass = async(token)=>{
  const response = await axios.get(`${BACKEND_URL}/auth/api/alunos/setpassword/${token}`)
  .then((response) => { console.log(response);
    return response})
  .catch((error) =>{ console.log(error.response)
    return error.response});

    if(response.status === 200){
      return response.status;
    }
    else{
      return response.status;
    }
  }

  const uploadImageUser = async (files,userId)=>{
  const formData = new FormData();
  
  formData.append('arquivo',files[0])
  
  const config ={ headers: {'content-type':'multipart/form-data'}}
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);

  timestamp.toString();

  console.log("nome do arquivo",files[0])
  var extensao = files[0].name.split(".",2);

  console.log("aqui extensao",extensao[1]);
  const responseFile = await axios.post(`${BACKEND_URL}/auth/api/exercises/sendFile/${timestamp}.${extensao[1]}`,formData,config)
  .then((response) => {console.log(response); return response})
  .catch((error) => {console.log(error.response); return error.response})
  console.log("mensagem aqui",responseFile);

  const responseUpdate = await axios.patch(`${BACKEND_URL}/auth/api/alunos/update/${userId}`, {imagename: timestamp+"."+extensao[1]})
    .then((response) => {console.log(response); return response})
    .catch((error) => {console.log(error.response); return error.response})
    console.log("mensagem aqui", responseUpdate)

    const userData = localStorage.getItem("u")
    const user = JSON.parse(userData);

    // 3. Altera o campo desejado
    user.imageName = timestamp+"."+extensao[1]; // ou qualquer novo valor

    // 4. Salva de volta no localStorage
    localStorage.setItem("u", JSON.stringify(user));
  return responseUpdate.status;

}    




const requestAPI= async() =>{
  const response = await axios.get(`${BACKEND_URL}/auth/api/alunos/helloworld`,{ withCredentials: true })
  .then((response)=>{console.log(response.data)
  return response.data})
  .catch(error => {console.log(error)
  return error.response});

  if(response.status === 200) {
    return response.data
  }
  else{
    return "error";
  }

}

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, loading, signup, signout, recoverpassword, setnewpassword, requestAPI, checkTokenResetPass ,uploadImageUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};
