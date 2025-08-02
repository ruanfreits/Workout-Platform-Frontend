import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import useExercise from "../../hooks/useExercise";
import ExercisesTable from "../../components/Table";
import DropFileInput from '../../components/DropFileInput/DropFileInput';

const ListExercises = () => {
  const { ListExercises } = useExercise();

  const [exerciseName, setexerciseName] = useState("");
  const [series, setSeries] = useState("");
  const [repeticoes, setRepeticoes] = useState("");
  const [exerciseDescription, setexerciseDescription] = useState("");
  const [files, setFiles] = useState(null);
  
  const [message, setMessage] = useState("");

  return (
    <C.Container>
        <C.ContainerExercise >
                <ExercisesTable/>
        </C.ContainerExercise>
        <C.LabelSignup>
            <C.UnderlineLink to="/home">Voltar ao Menu Inicial</C.UnderlineLink>
        </C.LabelSignup>
    </C.Container>
    
    
  );
};

export default ListExercises;
