import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RecoverPassword = () => {
  const { recoverpassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 750);
  }, [])



  const handleRecoverPassword = async () => {
    if (!email) {
      setMessage("Preencha o campo");
      return;
    }
    try{
    const res = await recoverpassword(email);
    setMessage(res)
    alert("Foi enviado um link para restauração de senha no seu e-mail.");

    navigate("/home");
    }
        catch(error){
      setMessage("Error inesperado ao tentar recuperar senha")
    }

  };

  return (loading ? (<C.Container> <C.SpanLoading></C.SpanLoading> </C.Container>):
    <C.Container>
      <C.Label>RECUPERAÇÃO DE SENHA</C.Label>
      <C.Content>
      <C.LabelSignin>
      Digite seu e-mail que enviaremos um link para definir uma nova senha
        </C.LabelSignin>
        <Input
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setMessage("")]}
        />
        <C.labelError>{message}</C.labelError>
        <Button Text="Recuperar Senha" onClick={handleRecoverPassword} />
        <C.LabelSignup>
            <C.UnderlineLink to="/">Voltar para o Menu Inicial</C.UnderlineLink>
        </C.LabelSignup>
      </C.Content>
      <C.Content>
      <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
    
  );
};

export default RecoverPassword;
