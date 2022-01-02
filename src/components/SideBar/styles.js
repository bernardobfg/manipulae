import styled from "styled-components";

export const SideArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  background-color: ${props => props.theme.colors.auxiliar};
  min-height: 100vh;
  width: 220px;
  border-right: 1px solid ${props => props.theme.colors.divider};
 
  @media(max-width: 768px){
    min-height: auto;
    height: 100%;
    width: 100%;
    padding-top: 0;
  }
`

export const SideAreaMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 100;

  img{
    width: 140px;
    margin-bottom: 40px;
  }
  @media(max-width: 768px){
    padding: 15px 20px;
    background-color: ${props => props.theme.colors.auxiliar};
    position: ${props => props.isOpen ? 'fixed' : 'relative'};
    img{
      margin-bottom: 10px;
    }
  }
`

export const HamurgerBtn = styled.button`
  background: transparent;
  display: none;
  color: #fff;
  @media(max-width: 768px){
    display: block;
  }
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media(max-width: 768px){
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    min-height: 100vh;
    margin-top: 60px;
    padding-top: 20px;
    z-index: 100;
    background-color: ${props => props.theme.colors.auxiliar};
    width: 200px;
    align-self: flex-start;
  }
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-left: 5px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.auxiliar};
  font-weight: 600;
  font-size: 18px;

  a{
    color: ${props => props.selected? props.theme.colors.primary: props.theme.colors.text};
    display: flex;
    align-items: center;
    transition: color .5s;

    &:hover{
      color: ${props => props.theme.colors.primary};
    }
  }

  &:not(:last-child){
    margin-bottom: 10px;
  }
`

export const NavItemName = styled.span`
  margin-left: 10px;
`