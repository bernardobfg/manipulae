import { Input, SearchContainer, SearchContent, SubmitButton, ClearButton, LoadingArea } from "./styles"
import { BsSearch, BsXCircle } from "react-icons/bs"
import { useEffect, useState } from "react"
import ReactLoading from "react-loading"
export const SearchBar = ({ onSearch }) => {

  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    onSearch(search, setIsLoading)
  }
  const handleClearSearch = () => {
    setSearch("")
  }
  useEffect(() => {
    const timer = setTimeout(() => { 
      onSearch(search, setIsLoading)
    }, 1000)
    return () => clearTimeout(timer)
  }, [search])

  return (
    <SearchContainer>
      <SearchContent>
        <form onSubmit={handleSearch}>
          <SubmitButton type="submit" >
            <BsSearch size={16} />
          </SubmitButton>
          <Input placeholder="Buscar" value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
        <LoadingArea>
          {isLoading && <ReactLoading type="spin" color="#d3d3d3" width={18} height={18}/>}
        </LoadingArea>
        {
          search &&
          <ClearButton onClick={handleClearSearch}>
            <BsXCircle size={20} />
          </ClearButton>
        }
      </SearchContent>

    </SearchContainer>
  )
}