import { BsHeartFill } from "react-icons/bs"
import { useEffect, useState } from "react"
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
import { useDispatch, useSelector } from "react-redux"
import { addMusicToFavorite, removeMusicFromFavorite } from "../../store/modules/favoriteList/action"



export const Track = ({ track }) => {
  const favoriteList = useSelector(state => state.favoriteList)
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const isFavorite = favoriteList.find(item => item.id === track.id)
    setIsFavorite(!!isFavorite)
  }, [favoriteList, track.id])

  const minutes = Math.floor(track.duration / 60)
  const seconds = track.duration % 60
  const formatedDuration = `${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`
  
  const toggleIsMusicFavorite = () => {
    if (isFavorite) {
      dispatch(removeMusicFromFavorite(track))
    }
    else {
      dispatch(addMusicToFavorite(track))
    }
  }

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
            onClick={toggleIsMusicFavorite}
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
  
        </Actions>
      </Content>

    </TrackContainer>
  )
}