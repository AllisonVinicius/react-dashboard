import styled from "styled-components";

export const Container = styled.div`
  /**grid configuracao do conteiner da parte do main header */
  grid: MH;
  background-color: ${props => props.theme.colors.secundary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`;
export const Welcome = styled.h3``;
export const UserName = styled.span``;
