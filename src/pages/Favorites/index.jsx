import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container";
import { MusicImg } from "../../components/MusicImg";
import { SearchBar } from "../../components/SearchBar";
import { Track } from "../../components/Track";
import { Content, NoResults, Section, SectionTitle, Tracks } from "./styles";

export const Favorites = () => {
  const favoriteList = useSelector(state => state.favoriteList);
  const [results, setResults] = useState(favoriteList);
  const [search, setSearch] = useState("");

  const searchFavorites = () => {
    if (search) {
      setResults(favoriteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
    }
  }

  useEffect(() => {
    setResults(favoriteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
  }, [favoriteList])

  return (
    <Container activePage="Favoritas">
      <Content>
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={searchFavorites}
        />
        <Section>
          {
            results.length === 0 ?
              <NoResults>
                <h2>Nenhuma música adicionada</h2>
                <MusicImg />
              </NoResults> :

              <>
                <SectionTitle>
                  Suas músicas favoritas
                </SectionTitle>

                <Tracks>
                  {results.map(item => (
                    <Track key={item.id} track={item} />
                  ))}
                </Tracks></>
          }
        </Section>
      </Content>

    </Container>
  )
}