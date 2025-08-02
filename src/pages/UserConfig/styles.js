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

export const ContentUser = styled.div`
  gap: 5px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 700px;
  padding: 20px;
  border-radius: 5px;
`;

export const ContentData = styled.div`
  gap: 0px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 10px;
  border-radius: 5px;
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


export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const ContentModal = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 5px;
  margin-left:25%;
  border-radius: 5px;
`;


export const ContentMenu = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
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

export const dragdrop = styled.section`
    background: #fff;
    border: 1px solid var(--border-color);
    border-radius: 8px;
  `
export const documentUploader = styled.div `
    border: 2px dashed #4282fe;
    background-color: #f4fbff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
    cursor: pointer;
  
    &.active {
      border-color: #6dc24b;
    }

    input[type="file"] {
        display: none;
      }
`
export const uploadInfo = styled.div `
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
  
      svg {
        font-size: 36px;
        margin-right: 1rem;
      }
  
      div {
        p {
          margin: 0;
          font-size: 16px;
        }
  
        p:first-child {
          font-weight: bold;
        }
      }
    }
`
export const fileList = styled.div `
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      height: 30vh;
      &__container {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
`

export const fileItem = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
  
      .file-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
  
        p {
          margin: 0;
          font-size: 14px;
          color: #333;
        }
      }
  
      .file-actions {
        cursor: pointer;
  
        svg {
          font-size: 18px;
          color: #888;
        }
  
        &:hover {
          svg {
            color: #d44;
          }
        }
      }
`
  
export const browseBtn = styled.button `
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      cursor: pointer;
      background-color: var(--primary-color);
      &:hover {
        background-color: transparent;
      }
`
  
export const successFile = styled.div`
      display: flex;
      align-items: center;
      color: #6dc24b;
  
      p {
        margin: 0;
        font-size: 14px;
        font-weight: bold;
      }
`

export const Title = styled.h2;

export const Img = styled.img`
  border-radius: 30px;
  margin-bottom: 5px;
`