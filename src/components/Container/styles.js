import styled from "styled-components";
export const StyledContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  @media(max-width: 768px){
    flex-direction: column;
  }
`

export const Cover = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: rgba(15,15,15,0.7);
  display: none;
  position: fixed;
  @media(max-width: 768px){
    display: ${props => props.isMenuOpen ? "block" : "none"};
  }
`