import styled from "styled-components"

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  padding: 10px 20px;
  justify-content: space-between;
`

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  justify-content: space-between;
  form{
    display: flex;
    align-items: center;
  }
  @media(max-width:1000px){
    width: 100%;
  }
`

export const Input = styled.input`
  width: 500px;
  background: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  display: block;
  @media(max-width:768px){
    width:100%;
  }
`

export const SubmitButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.lightText};
  margin-right: 10px;
`

export const ClearButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.lightText};
  display: inline;
  border-radius: 50%;
  transition: color 0.5s;
  &:hover{
    color: ${props => props.theme.colors.text};
  }
`

export const LoadingArea = styled.div`
  width: 60px;
  padding-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center
`