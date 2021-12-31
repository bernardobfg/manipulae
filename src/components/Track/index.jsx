import { BsHeartFill, BsPlusCircleFill } from "react-icons/bs"
import { useState } from "react"
import { FaDeezer } from "react-icons/fa"
import ReactTooltip from 'react-tooltip'

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
import { Link } from "react-router-dom"


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
            data-tip data-for='addToFavorite'
          >
            <BsHeartFill />
          </AddToFavorites>
          <ReactTooltip id="addToFavorite" effect="solid">
            <span>Adicionar aos favoritos</span>
          </ReactTooltip>
          <CheckOnDeezer
            href={track.link}
            target="_blank"
            data-tip data-for='viewOnDeezer'
          >
            <FaDeezer size={20}/>
          </CheckOnDeezer>
          <ReactTooltip id="viewOnDeezer" effect="solid">
            <span>Ver no Deezer</span>
          </ReactTooltip>
          <Link
            src={`/musicas/${track.id}`}
            data-tip data-for='musicDetail'
          >
            <FaDeezer size={20}/>
          </Link>
          <ReactTooltip id="musicDetail" effect="solid">
            <span>Ver detalhes</span>
          </ReactTooltip>
        </Actions>
      </Content>

    </TrackContainer>
  )
}