import styled from 'styled-components';

export const MovieWrap = styled.section`
  display: flex;
  padding: 20px;
  border-bottom: 1px grey solid;
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
`;

export const ListDetails = styled.ul`
  display: flex;
`;

export const ItemDetails = styled.li`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;
