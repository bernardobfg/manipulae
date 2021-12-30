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
  img{
    width: 140px;
    margin-bottom: 40px;;
  }
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
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