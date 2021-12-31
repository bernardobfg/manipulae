import { Nav, NavItem, SideArea, NavItemName } from "./styles"
import { BsMusicNoteBeamed, BsHeartFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
export const SideBar = ({activePage}) => {
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
      <img src={Logo} alt="Logo" />
      <Nav>
        {itens.map(item => (
          <NavItem key={item.name} selected={item.name===activePage}>
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