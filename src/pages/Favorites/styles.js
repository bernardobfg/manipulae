import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  align-self: flex-start;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`

export const Tracks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div + div{
    margin-top: 10px;
  }
`

export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 24px;
    color: ${props => props.theme.colors.text};
  }
`