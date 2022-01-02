import styled from 'styled-components';

export const TrackContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 150px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  padding-bottom:  10px;
  @media(max-width: 768px){
    height: auto;
  }
`

export const Cover = styled.img`
  height: 100%;
  object-fit: cover;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InfoContainer = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;

`
export const Title = styled.h2`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`

export const Data = styled.small`
  font-size: 16px;
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 5px;
`

export const Duration = styled.small`
  font-size: 14px;
  color: ${props => props.theme.colors.lightText};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const AddToFavorites = styled.button`
  background: transparent;
  transition: font-size .2s;
  transition: color .5s;
  color: ${props => props.isFavorite ? "red" : "pink"};
  font-size: 20px;
  &:hover{
    font-size: 22px;
  }
`

export const CheckOnDeezer = styled.a`
  background: transparent;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  margin-left: 10px;
  transition: color .2s;
  &:hover{
    color: ${props => props.theme.colors.primary};
  }
`