import { Nav, NavItem, SideArea, NavItemName, HamurgerBtn, SideAreaMenu } from "./styles"
import { BsMusicNoteBeamed, BsHeartFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import Hamburger from "hamburger-react"
import { useState } from "react"
export const SideBar = ({ activePage, isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(false)
  const itens = [
    {
      name: "Músicas",
      path: "/",
      icon: BsMusicNoteBeamed
    },
    {
      name: "Favoritas",
      path: "/favoritas",
      icon: BsHeartFill
    },
  ]

  return (
    <SideArea>
      <SideAreaMenu isOpen={isOpen}>
        <HamurgerBtn onClick={() => setIsOpen(!isOpen)}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </HamurgerBtn>
        <img src={Logo} alt="Logo" />
        <div></div>
      </SideAreaMenu>
      <Nav isOpen={isOpen}>
        {itens.map(item => (
          <NavItem key={item.name} selected={item.name === activePage}>
            <Link to={item.path}>
              <item.icon size={20} />
              <NavItemName>{item.name}</NavItemName>
            </Link>
          </NavItem>
        ))}
      </Nav>
    </SideArea>
  )
}