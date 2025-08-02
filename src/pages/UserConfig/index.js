import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import DropFileInput from '../../components/DropFileInput/DropFileInput'; 
import noimageUser from "../../assets/no-userImage.webp";
import {BACKEND_URL} from "../../config/index.js"
import axios from "axios"
import Popup from 'reactjs-popup';

const UserConfig = () => {
  const { signed, signout, requestAPI, user, uploadImageUser } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState(null);
  const [UserImage, setUserImage] = useState()

  useEffect(()=>{
    const loadUserImage = async (imageName) => {
      
      if(imageName === "no-Image"){
        console.log(imageName)
        setUserImage(noimageUser);
        return 0;
      }else{
      const resImage = await axios.get(`${BACKEND_URL}/auth/api/files/base64/${imageName}`,{
        responseType: 'text',})
        .then(resImage => setUserImage(`data:image/jpg;base64,${resImage.data}`))
        .catch(error => {
          console.error("Error ao carregar image:", error);
          setUserImage(noimageUser);
        });

;}}
loadUserImage(user.imageName)
      },[])

  console.log("imagename",user.imageName)
  
  
  const handleFile = async() =>{
    if(!files){
      setMessage("Antes de Enviar Selecione o Arquivo");
      return;
    }
    try{
      const res = await uploadImageUser(files,user.id);
      console.log(res)
      
      setMessage("Imagem enviada com sucesso!")
      return;
    }
    catch(error){
      console.log(error);
      setMessage("Error inesperado ao enviar Arquivo")

    }
  }
  const handleMenu= async () =>{
    navigate("/home")
    return;
  }

  const handleLogOut= async () =>{
    const res = await signout();
    navigate("/")
    return;
  }

const handleExercise = ()=>{
  navigate("/exercise")
  return;
}

  return (
    <C.Container>
      <C.ContentUser>
      <C.ContentData>
      {user ? (
          <>
          <Popup trigger={<div>{UserImage && <C.Img src={UserImage}  style={{width:"150px", height:"auto"}}alt="Imagem carregada"></C.Img> }</div>} modal nested>
          {close => (
                    <C.ContentModal className="content">
                            <DropFileInput onFileChange={(files)=> setFiles(files)}/>
                            <C.labelError>{message}</C.labelError>
                    <Button Text="Upload" onClick={() => handleFile()}>Send File</Button>
                        <div>
                            {/* <button onClick=
                                {() => close()}>
                                    Close modal
                            </button> */}
                        </div>
                  </C.ContentModal>
                )
            }
          </Popup>
            <p>{user.nome}</p>
            <p>Email: {user.email}</p>
            <p>Idade: {user.idade}</p>
            <p>Altura: {user.altura}</p>
            <p>Telefone: {user.telefone}</p>
          </>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
        </C.ContentData>
<C.Content> 
      
      <Button Text="Update User" onClick={(handleExercise)}>
        Update User
      </Button>
      <Button Text="Security Settings" onClick={() => handleFile(files)}>Security Settings</Button>
      <Button Text="Send File" onClick={() => handleFile(files)}>Send File</Button>
      <Button Text="Download Workout PDF" onClick={(handleLogOut)}>
        Sair
      </Button>
</C.Content>
        </C.ContentUser>
        <C.labelError>{message}</C.labelError>
        <C.ContentMenu>  
        <Button Text="Menu" onClick={(handleMenu)}>
        Update User
      </Button>
      <Button Text="Workout" onClick={() => handleExercise()}>Send File</Button>
      <Button Text="Logout" onClick={(handleLogOut)}>
        Sair
      </Button>
      
</C.ContentMenu>


      <C.LabelSignup>
            <C.UnderlineLink to="/home">Voltar para o Menu Inicial</C.UnderlineLink>
        </C.LabelSignup>
    </C.Container>
  );
};

export default UserConfig;