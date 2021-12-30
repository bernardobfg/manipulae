import {
  TrackContainer,
  Cover,
  Title,
  Content,
  InfoContainer,
  Data,
  Duration,
  Actions,
  AddToFavorites,
  CheckOnDeezer
} from "./styles"
import { BsHeartFill } from "react-icons/bs"
import {FaDeezer} from "react-icons/fa"
import { useState } from "react"

export const Track = ({ track }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const minutes = Math.floor(track.duration / 60)
  const seconds = track.duration % 60
  const formatedDuration = `${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`
  return (
    <TrackContainer>
      <Cover src={track.album.cover_small} alt={track.title} />
      <Content>
        <InfoContainer>
          <Title>{track.title}</Title>
          <Data>Artista: {track.artist.name}</Data>
          <Data>Album: {track.album.title}</Data>
          <Duration>Duração: {formatedDuration}</Duration>
        </InfoContainer>
        <Actions>
          
          <AddToFavorites
            onClick={() => setIsFavorite(!isFavorite)}
            isFavorite={isFavorite}
          >
            <BsHeartFill />
          </AddToFavorites>
          <CheckOnDeezer href={track.link} target="_blank">
            <FaDeezer size={20}/>
          </CheckOnDeezer>
        </Actions>
      </Content>

    </TrackContainer>
  )
}