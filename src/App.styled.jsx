import styled from "styled-components";

export const Title = styled.h1`
  color: #eef;
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
  margin-top: 20px;
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
