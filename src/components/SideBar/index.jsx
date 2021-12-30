import { Nav, NavItem, SideArea, NavItemName } from "./styles"
import { BsMusicNoteBeamed, BsHeartFill } from "react-icons/bs"
import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/logo.svg"
export const SideBar = () => {
  const location = useLocation()
  const itens = [
    {
      name: "Tendências",
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
          <NavItem key={item.name} selected={item.path===location.pathname}>
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