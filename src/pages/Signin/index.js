import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logoreal.jpg"
const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState({
    case: false,
    number: false,
    length: false
  });
  // const [error, setError] = useState("");
  const [message, setMessage] = useState("");



  const handleLogin = async () => {
    if (!email | !senha) {
      setMessage("Preencha todos os campos");
      return;
    }

    try{
      const result = await signin(email, senha)
      setMessage(result)
      if(result === "Login bem-sucedido"){
        navigate("/home")
      }
      return;
    }
    catch(error){
      setMessage("Error inesperado ao fazer login")
    }

  };

  return (
    <C.Container>
      <img src={logo} style={{width:"180px", height:"auto"}}alt="Imagem carregada" ></img>
      <C.Label>WORKOUT PLATFORM</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setMessage("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setMessage("")]}
        />
        <C.labelError>{message}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
            <C.UnderlineLink to="/recoverpassword">Esqueci Minha Senha</C.UnderlineLink>
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

export default Signin;
