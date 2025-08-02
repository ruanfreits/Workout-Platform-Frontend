import styled from "styled-components";

export const TableInfo = styled.table`
.table tbody tr.highlight td {
        background-color: #ddd;
      }
`



export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  width: 100%;
  width: 800px;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`;

export const ContentDescription = styled.div`
  gap: 15px;
  display: block;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  width: 500px;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`

export const ContentTable = styled.div`
  gap: 15px;
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  width: 800px;
  height: 200px;
  padding: 10px;
  border-radius: 5px;
  overflow: scroll;
  margin-right:30px;
  margin-top: 20px;
  
`;

export const ContentImage = styled.div`
  gap: 15px;
  display: block;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;
  `;


  export const ContentExercise = styled.div`
  gap: 15px;
  display: block;
  justify-content: center;
  flex-direction: a;
  width: 100$;
  background-color: black;
  `;