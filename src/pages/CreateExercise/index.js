import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import useExercise from "../../hooks/useExercise";
import ExercisesTable from "../../components/Table";
import DropFileInput from '../../components/DropFileInput/DropFileInput';

const CreateExercise = () => {
  const { createExercise } = useExercise();

  const [exerciseName, setexerciseName] = useState("");
  const [series, setSeries] = useState("");
  const [repeticoes, setRepeticoes] = useState("");
  const [exerciseDescription, setexerciseDescription] = useState("");
  const [files, setFiles] = useState(null);
  
  const [message, setMessage] = useState("");

  const handleCreateExercise = async () => {
    if (!exerciseName | !series | !repeticoes | !exerciseDescription) {
      setMessage("Preencha todos os campos");
      return;
    }
    try{
      const result = await createExercise(exerciseName, series,repeticoes, exerciseDescription,files);
      console.log("AQUI OQUE ESTA VINDO", result)

        setMessage(result)
     }
    catch(error){
      console.log(error);
      setMessage("Error inesperado ao criar exercicio")
    }
  };

  return (
    <C.Container>
<C.ContainerExercise >
        <ExercisesTable/>
</C.ContainerExercise>

      <C.Content>
      <C.Label>CRIAÇÃO DE EXERCÍCIO</C.Label>
        <Input
          type="exerciseName"
          placeholder="Digite o nome do Exercicio"
          value={exerciseName}
          onChange={(e) => [setexerciseName(e.target.value), setMessage("")]}
        />
        <Input
          type="exerciseDescription"
          placeholder="Digite a descrição do exercicio"
          value={exerciseDescription}
          onChange={(e) => [setexerciseDescription(e.target.value), setMessage("")]}
        />
                <C.ContentRepSets>
        <Input
          type="series"
          placeholder="Quant.Séries"
          value={series}
          onChange={(e) => [setSeries(e.target.value), setMessage("")]}
        />
        <Input
          type="repeticoes"
          placeholder="Quant.Repetições"
          value={repeticoes}
          onChange={(e) => [setRepeticoes(e.target.value), setMessage("")]}
        />
        </C.ContentRepSets>
        <C.labelError>{message}</C.labelError>
        <DropFileInput 
                onFileChange={(files)=> setFiles(files)}
            />
        <Button Text="Criar Exercicio" onClick={handleCreateExercise} />
        <C.LabelSignup>
            <C.UnderlineLink to="/home">Voltar ao Menu Inicial</C.UnderlineLink>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
    
  );
};

export default CreateExercise;
