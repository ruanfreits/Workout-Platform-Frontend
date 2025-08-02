import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Home = () => {
  const { signed, signout, requestAPI } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");


  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 750);
  }, [])

  // const handleHelloWorld = async () => {
  //   const res = await requestAPI();

  //   if (res) {
  //     setMessage(res);
  //     return;
  //   }

  //   alert("Hello World");
  // };

  const handleLogOut= async () =>{
    const res = await signout();
    navigate("/")
    return;
  }

const handleExercise = ()=>{
  navigate("/listexercises")
  return;
}

const handleExerciseEditor = ()=>{
  navigate("/exercise")
  return;
}

  const handleUserConfig = ()=>{
    navigate("/userconfig")
    return;
}

  return (loading ? (<C.Container> <C.SpanLoading></C.SpanLoading> </C.Container>):
    <C.Container>
      <C.Title>Home</C.Title>
      
      <Button Text="User Configuration" onClick={(handleUserConfig)}>
        User Configuration
      </Button>
      <Button Text="Exercices Hub" onClick={(handleExercise)}>
        Ir para Exercicios
      </Button>
      <Button Text="Create Workout " onClick={handleExerciseEditor}></Button>
      <Button Text="Sair" onClick={(handleLogOut)}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
