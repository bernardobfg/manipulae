import { useEffect, useState } from "react"
import ReactLoading from "react-loading";
import { Container } from "../../components/Container"
import { SearchBar } from "../../components/SearchBar"
import { Track } from "../../components/Track"
import { api } from "../../services/api"
import { Content, Section, SectionTitle, Tracks, LoadMoreButton } from "./styles"

export const Home = () => {
  const [chartTracks, setChartTracks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false)
  const onSearch = async (search, setLoadingFunction) => {
    if (!search) {
      setSearchResult([])
      setNextPage(null)
      return
    }
    setLoadingFunction(true)
    try {
      const response = await api.get(`/search?q=${search}&limit=10`)
      console.log(response.data)
      setSearchResult(response.data.data)
      const nextPageUrl = response.data.next.split(".com/")[1]
      setNextPage(nextPageUrl)
    }
    catch (error) {
      console.log(error)
    }
    setLoadingFunction(false)
  }

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await api.get("/chart")
        setChartTracks(response.data.tracks.data)
        console.log(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchCharts()
  }, [])

  const fetchNextPage = async () => {
    if (!nextPage) return
    setIsFetchingNextPage(true)
    try {
      const response = await api.get(nextPage)
      setSearchResult([...searchResult, ...response.data.data])
      const nextPageUrl = response.data.next.split(".com/")[1]
      setNextPage(nextPageUrl)
    }
    catch (error) {
      console.log(error)
    }
    setIsFetchingNextPage(false)
  }

  return (
    <Container>
      <Content>
        <SearchBar onSearch={onSearch} />
        <Section>
          <SectionTitle>
            {searchResult.length > 0 ? "Resultados da busca" : "As principais tendências da atualidade"}
          </SectionTitle>
          <Tracks>
            {
              searchResult.length > 0 ?
                searchResult.map(track => (
                  <Track key={track.id} track={track} />
                )) :
                chartTracks.map(track => (
                  <Track key={track.id} track={track} />
                ))
            }
          </Tracks>
          {searchResult.length > 0 && (
            <LoadMoreButton onClick={fetchNextPage}>
              {isFetchingNextPage ?
                <ReactLoading type="spin" color="#fff" height={20} width={20} /> :
                "Carregar mais"
              }
            </LoadMoreButton>
          )}
        </Section>
      </Content>
    </Container>
  )
}