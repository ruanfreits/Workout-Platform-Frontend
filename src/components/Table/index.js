import {BACKEND_URL} from "../../config/index.js"
import { useEffect, useState } from "react";
import * as C from "./styles.js"
import axios from "axios"
import noImage from "../../assets/no-image.png"

const ExercisesTable = () => {
    const [data , setData] = useState([])
    const [loading, setLoading] = useState("")
    const [highlightedRow, setHighlightedRow] = useState(null);
    const [ImageSrc, setImageSrc]= useState();

    const handleRowClick = async (index, imageName) => {
      setHighlightedRow(index); // Define o índice da linha clicada
      if(imageName === "no-Image"){
        setImageSrc(noImage);
        return 0;
      }else{
      const resImage = await axios.get(`${BACKEND_URL}/auth/api/files/base64/${imageName}`,{
        responseType: 'text',})
        .then(resImage => setImageSrc(`data:image/gif;base64,${resImage.data}`))
        .catch(error => {
          console.error("Error ao carregar image:", error);
          setImageSrc(noImage);
        });
      }
    };

    useEffect(()=>{
    async function getUsersData(){
        const res = await axios.get(`${BACKEND_URL}/auth/api/exercises`)
        console.log(res.data);
        setLoading("false");
        setData(res.data);
        


      }
      getUsersData();
},[])


return(<div>
        {highlightedRow && (
        <C.Content>
          <C.ContentDescription>
          <h3> {highlightedRow.exerciseName}</h3>
         <p>Descrição do Exercício</p>
         <p>{highlightedRow.exerciseDescription}</p>
       </C.ContentDescription>
       <C.ContentImage>
          {ImageSrc && <img src={ImageSrc} style={{width:"150px", height:"auto"}}alt="Imagem carregada" />}
        </C.ContentImage>
       </C.Content>


      //     <C.ContentExercise>
      //   <C.ContentDescription>
      //     <h1> {highlightedRow.exerciseName}</h1>
      //     <p>Descrição do Exercício</p>
      //     <p>{highlightedRow.exerciseDescription}</p>
      //   </C.ContentDescription>
      //   <C.ContentImage>
      //     {ImageSrc && <img src={ImageSrc} style={{width:"200px", height:"auto"}}alt="Imagem carregada" />}
      //   </C.ContentImage>
      // </C.ContentExercise>
      )

      }
    <C.ContentTable>
    <C.TableInfo className="table table-fixed table-condensed table-hover">
        <thead >
            <tr>
                <th scope="coll">Id</th>
                <th scope="coll">Exercicio</th>
                <th scope="coll">Series</th>
                <th scope="coll">Repeticoes</th>
                {/* <th scope="coll">Select</th> */}
            </tr>
        </thead>
        <tbody>
        {data.map((index, value)=>(
            <tr  key={index.id} className={highlightedRow === index ? "highlight" : ""} onClick={() => handleRowClick(index, data[value]['imageName'])}>
            <td>{data[value]['id']}</td>    
            <td>{data[value]['exerciseName']}</td>
            <td>{data[value]['series']}</td>
            <td>{data[value]['repeticoes']}</td>
            </tr>
        ))}
        </tbody>
    </C.TableInfo>
    </C.ContentTable>
    </div>
)
};



export default ExercisesTable;