import styled from "styled-components";

export const List = styled.ul`
  position: absolute;
  top: 10px;
  right: 20px;
  color: #ddd;
`;

export const Item = styled.ul`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
