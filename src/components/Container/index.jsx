import { SideBar } from "../SideBar";
import { StyledContainer } from "./styles";

export const Container = ({ children }) => {
  return (
    <StyledContainer>
      <SideBar/>
      {children}
    </StyledContainer>
  );
};