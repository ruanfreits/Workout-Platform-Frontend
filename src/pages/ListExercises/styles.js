import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 500px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const UnderlineLink = styled(Link)`
  cursor: pointer;
  text-decoration: none; /* Remove sublinhado padrão do Link */
  color: inherit; /* Herda a cor do texto */

  &:hover {
    text-decoration: underline;
    color: #676767;
  }
`;
export const ContentRepSets = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  background-color: white;
  max-width: 500px;
  padding: 5px;
  border-radius: 5px;
`;

export const ContentTable = styled.div`
  gap: 15px;
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 750px;
  height: 290px;
  padding: 10px;
  border-radius: 5px;
  overflow: scroll;
  margin-right:30px;
  
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
  width: 750px;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`

export const ContainerExercise = styled.div`
  margin-right: 15px;
  flex-direction: collumn;
  max-width: 750px;
`