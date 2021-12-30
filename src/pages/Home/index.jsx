import { Container } from "../../components/Container"
import { SearchBar } from "../../components/SearchBar"

export const Home = () => {

  const onSearch = async (search, setLoadingFunction) => {
    //wait 1s
    setLoadingFunction(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoadingFunction(false)
  }

  return (
    <Container>
      <SearchBar onSearch={onSearch}/>
    </Container>
  )
}