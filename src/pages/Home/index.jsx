import { useEffect, useState } from "react"
import { Container } from "../../components/Container"
import { SearchBar } from "../../components/SearchBar"
import { Track } from "../../components/Track"
import { api } from "../../services/api"
import { Content, Section, SectionTitle, Tracks } from "./styles"

export const Home = () => {
  const [chartTracks, setChartTracks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const onSearch = async (search, setLoadingFunction) => {
    if (!search) {
      setSearchResult([])
      return
    }
    setLoadingFunction(true)
    const response = await api.get(`/search?q=${search}&limit=10`)
    setSearchResult(response.data.data)
    setLoadingFunction(false)
  }

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await api.get("/chart")
        setChartTracks(response.data.tracks.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchCharts()
  }, [])

  return (
    <Container>
      <Content>
        <SearchBar onSearch={onSearch} />
        <Section>
          <SectionTitle>
            {searchResult.length > 0 ? "Resultados da busca" : "As principais tendências da atualidade"}
          </SectionTitle>
          <Tracks>
            ${
              searchResult.length > 0 ?
              searchResult.map(track => (
                <Track key={track.id} track={track} />
              )):
              chartTracks.map(track => (
                <Track key={track.id} track={track} />
              ))
            }
          </Tracks>
        </Section>
      </Content>
    </Container>
  )
}