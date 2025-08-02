import { React, createContext} from "react";
import {BACKEND_URL} from "../../config/index.js"
import axios from "axios";

axios.defaults.withCredentials = true;

export const ExerciseContext = createContext({});

export const ExerciseProvider = ({ children }) => {

  const requestToCreate = async(ExerciseName,series,repeticoes,exerciseDescription, timestamp)=>{
    console.log("antes de inserir timestamp",timestamp);
    
    const response = await axios.post(`${BACKEND_URL}/auth/api/exercises`,{
      exerciseName:ExerciseName,
      series: series,
      repeticoes: repeticoes,
      exerciseDescription:exerciseDescription,
      imageName:timestamp.toString()})
      .then((response) => {console.log(response); return response})
      .catch((error) => {console.log(error.response); return response})
  }

  const sendFileBucket = async(file) =>{
    const formData = new FormData();
    formData.append('file',file[0])
    const config ={
      headers: {
        'content-type':'multipart/form-data'
      }
    }
    try{
      const response = await axios.post(`${BACKEND_URL}/auth/api/files/sendFile`,formData,config)
      .then((response) => {console.log(response); return response})
      .catch((error) => {console.log(error.response); return response})
      if(response.status === 200){
        return "The File was Uploaded Succesfully"
    }

    }
    catch(Error){
      return Error;
    }
  }

    const createExercise = async(ExerciseName,series,repeticoes,exerciseDescription,files) =>{
      try{
        if(!files){
          const response = requestToCreate(ExerciseName,series,repeticoes,exerciseDescription,"no-Image")
          .then((response) => {return response})
          .catch((error) => {console.log(error.response); return error.response})

          if(response.status === 200){
            return "Exercise Created Successfully"
          }
          if(response.status === 409){
            return "The Exercise Already Exist"
          }

        }else{
          const formData = new FormData();
          formData.append('arquivo',files[0])
          const config ={
            headers: {
              'content-type':'multipart/form-data'
            }
        }
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);

          timestamp.toString()
          const response = await requestToCreate(ExerciseName,series,repeticoes,exerciseDescription,timestamp);
  
            const responseFile = await axios.post(`${BACKEND_URL}/auth/api/exercises/sendFile/${timestamp}`,formData,config)
            .then((response) => {console.log(response); return response})
            .catch((error) => {console.log(error.response); return error.response})
            console.log("mensagem aqui",responseFile)
            return "Upload Feito com sucesso";
        }    
        }
        catch(Error){
            return Error;
        }
    }

    const getExercise = async()=>{
      try{
        const response = await axios.get(`${BACKEND_URL}/auth/api/exercises`)
        .then((response)=> {console.log(response); return response.data})
        .catch((error) => {console.log(error.response); return error.reponse})

        return response;
      }
      catch(Error){
        return Error;
      }
    }


    return (
        <ExerciseContext.Provider
          value={{createExercise, getExercise, sendFileBucket}}
        >
          {children}
        </ExerciseContext.Provider>
      );
}