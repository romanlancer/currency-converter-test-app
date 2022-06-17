import styled from "styled-components";

export const Title = styled.h1`
  padding: 5px 15px 10px;
  border-radius: 10px;
  color: #eef;
  background-color: #050c1fe1;
  text-align: center;
`;

export const Container = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation-name: fadeIn;
  animation-duration: 1000ms;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #050c1fe1;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  position: fixed;
  top: 40%;
  left: 45%;
`;
