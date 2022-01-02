import styled from "styled-components";
export const StyledContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  @media(max-width: 768px){
    flex-direction: column;
  }
`