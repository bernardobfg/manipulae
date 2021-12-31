import { SideBar } from "../SideBar";
import { StyledContainer } from "./styles";

export const Container = ({activePage, children }) => {
  return (
    <StyledContainer>
      <SideBar activePage={activePage}/>
      {children}
    </StyledContainer>
  );
};