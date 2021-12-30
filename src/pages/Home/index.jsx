import { useEffect, useState } from "react"
import { Container } from "../../components/Container"
import { SearchBar } from "../../components/SearchBar"
import { Track } from "../../components/Track"
import { api } from "../../services/api"
import { Content, Section, SectionTitle, Tracks } from "./styles"

export const Home = () => {
  const [chartTracks, setChartTracks] = useState([])
  const onSearch = async (search, setLoadingFunction) => {
    setLoadingFunction(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
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
            As principais tendências da atualidade
          </SectionTitle>
          <Tracks>
            {chartTracks.map(track => (
              <Track key={track.id} track={track} />
            ))}
          </Tracks>
        </Section>
      </Content>
    </Container>
  )
}