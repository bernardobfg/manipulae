import { useEffect, useState } from "react"
import ReactLoading from "react-loading";
import { Container } from "../../components/Container"
import { SearchBar } from "../../components/SearchBar"
import { Track } from "../../components/Track"
import { api } from "../../services/api"
import { Content, Section, SectionTitle, Tracks, LoadMoreButton, Loader, NoResults } from "./styles"
import InfiniteScroll from 'react-infinite-scroll-component';
import { ErrorImg } from "../../components/ErrorImg";
export const Home = () => {
  const [chartTracks, setChartTracks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [fetchingError, setFetchingError] = useState(false)
  const [search, setSearch] = useState("")
  const onSearch = async (setLoadingFunction) => {
    if (!search) {
      setSearchResult([])
      setNextPage(null)
      return
    }
    setLoadingFunction(true)
    try {
      const response = await api.get(`/search?q=${search}&limit=10`)
      setFetchingError(false)
      setSearchResult(response.data.data)
      const nextPageUrl = response.data.next.split(".com/")[1]
      setNextPage(nextPageUrl)
    }
    catch (error) {
      setFetchingError(true)
      console.log(error)
    }
    setLoadingFunction(false)
  }

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await api.get("/chart")
        setFetchingError(false)
        setChartTracks(response.data.tracks.data)
      }
      catch (error) {
        setFetchingError(true)
        console.log(error)
      }
    }
    fetchCharts()
  }, [])

  const fetchNextPage = async () => {
    if (!nextPage) return
    try {
      const response = await api.get(nextPage)
      setSearchResult([...searchResult, ...response.data.data])
      setFetchingError(false)
      const nextPageUrl = response.data.next.split(".com/")[1]
      setNextPage(nextPageUrl)
    }
    catch (error) {
      console.log(error)
      setFetchingError(true)
    }
  }

  return (
    <Container activePage="Músicas">
      <Content>
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={onSearch}
        />
        <Section>
          {
            !fetchingError &&
            <SectionTitle>
              {searchResult.length > 0 ? "Resultados da busca" : "As principais tendências da atualidade"}
            </SectionTitle>
          }
          {
            fetchingError ?
              <NoResults>
                <h2>Erro ao carregar as músicas</h2>
                <ErrorImg />
              </NoResults> :
              <>
                <Tracks>
                  {
                    searchResult.length > 0 ?
                      <InfiniteScroll
                        dataLength={searchResult.length}
                        next={fetchNextPage}
                        loader={
                          <Loader>
                            <ReactLoading type="spin" color="#dd33dd" height={24} width={24} />
                          </Loader>
                        }
                        hasMore={!!nextPage}
                      >
                        {searchResult.map(track => (
                          <Track key={track.id} track={track} />
                        ))}
                      </InfiniteScroll> :
                      chartTracks.map(track => (
                        <Track key={track.id} track={track} />
                      ))
                  }
                </Tracks>
              </>
          }

        </Section>
      </Content>
    </Container>
  )
}