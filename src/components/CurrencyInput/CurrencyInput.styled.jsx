import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #050c1fe1;
  width: 180px;

  display: grid;
  grid-template-columns: 100px 80px;
  border-radius: 15px;
`;

export const Amount = styled.input`
  padding-left: 10px;
  border: transparent;
  border-radius: 15px;
  background: none;
  color: #fff;
  cursor: pointer;
`;

export const Currency = styled.select`
  padding: 15px;
  border: transparent;
  border-radius: 15px;
  background: none;
  color: #fff;
  cursor: pointer;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #050c1fe1;
    border-radius: 10px;
  }
`;
export const Option = styled.option`
  background-color: #050c1fe1;
`;
