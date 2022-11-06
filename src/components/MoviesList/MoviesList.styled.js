import styled from 'styled-components';

export const Item = styled.li`
  display: block;
  background-color: azure;
  border-radius: 4px;
  margin-top: 5px;
  width: 300px;
  height: 20px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #64ed85;
  }
`;
