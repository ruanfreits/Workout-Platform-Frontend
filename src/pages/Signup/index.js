import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import {secureText} from "./utils"

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 750);
  }, [])



  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!nome | !email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    //CRIAR CONDIÇÃO PARA VER SE A SENHA É SEGURA
    const validacaoSenha = secureText(senha);

    if(validacaoSenha.status !== true){
      setError(validacaoSenha.mensagem)
      return;
    }

    try{
    const result = await signup(nome, email, senha);  
    setError(result)
    if (result === "SingUp bem-sucedido") {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }
    return;
  }catch(error){
    console.log(error)
    setError("Erro inesperado ao fazer cadastro");
  }
  };

  return (loading ? (<C.Container> <C.SpanLoading></C.SpanLoading> </C.Container>):
    <C.Container>
      <C.Label>CADASTRO DE USUÁRIO</C.Label>
      <C.Content>
      <Input
          type="nome"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />  
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
