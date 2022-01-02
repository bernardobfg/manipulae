import { useState } from "react";
import { SideBar } from "../SideBar";
import { Cover, StyledContainer } from "./styles";

export const Container = ({ activePage, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <StyledContainer>
      <SideBar
        activePage={activePage}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
      <Cover
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      />
      {children}
    </StyledContainer>
  );
};