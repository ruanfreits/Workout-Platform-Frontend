import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

//import {checkTokenResetPass} from "../../contexts/auth.js"
//import axios from "axios";


const RecoverPassword = () => {
  const { checkTokenResetPass } = useAuth();
  const {token} = useParams();
  const [isValidToken, setIsValidToken] = useState(null);
  const {setnewpassword} = useAuth();
  const navigate = useNavigate();

  const [NewPassword, setNewPassord] = useState("");
  const [NewPasswordConf, setNewPasswordConf] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 750);
  }, [])


  useEffect(()=>{
      async function validateToken(token){
      try {
      const responseToken = await checkTokenResetPass(token);
      if(responseToken === 200){
        setIsValidToken(true);
      }
      else{
        setIsValidToken(false);
      }
    }catch(error){
      setIsValidToken(false);
    }
  }
  validateToken(token);
}, [token]);



  const handleSetNewPassword = async () => {
    if (!NewPassword | !NewPasswordConf) {
      setError("Preencha os campos");
      return;
    }
    else if(NewPassword !== NewPasswordConf){
        setError("As senhas não são iguais");
        return;
    }
    try{
    const response = await setnewpassword(NewPassword,token);

    if (response === 200 ) {
      setError("Senha atualizada com sucesso");
      
      alert("Sua senha foi estaurada com sucesso!");

      navigate("/home");
      return "Senha Atualizada com Sucesso";
    }
  }catch(error){
    return "Error inesperado ao resetar senha"
  }

  };

  return (loading ? (<C.Container> <C.SpanLoading></C.SpanLoading> </C.Container>):
    <C.Container>{isValidToken === null ? (
      <C.LabelSignin>Verificando token...</C.LabelSignin>) : isValidToken ? (
      <C.Content>
      <C.LabelSignin>
      Nova senha
        </C.LabelSignin>
        <Input
          type="senha"
          placeholder="Digite sua nova Senha"
          value={NewPassword}
          onChange={(e) => [setNewPassord(e.target.value), setError("")]}
        />
        <Input
          type="senha"
          placeholder="Confirme sua nova Senha"
          value={NewPasswordConf}
          onChange={(e) => [setNewPasswordConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Criar nova Senha" onClick={handleSetNewPassword} />
  
      </C.Content>) : (<C.Content>
        <p>
          O token é invalido ou expirou.</p>
          <p>Solicite uma nova redefinição de senha</p>
        <C.LabelSignup>
        <C.UnderlineLink to="/recoverpassword">
            Solicitar nova Redefinição
          </C.UnderlineLink>
        </C.LabelSignup>

      </C.Content>)}
    </C.Container>
  );
};

export default RecoverPassword;
