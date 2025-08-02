import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const SpanLoading = styled.span`
  width: 60px;
  height:60px;
  background-color: transparent;
  display: block;
  border: 12px solid #046ee5;
  border-top: 12px solid transparent;
  border-radius: 50%;
  animation: loading 1s linear infinite;

  @keyframes loading {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
`;