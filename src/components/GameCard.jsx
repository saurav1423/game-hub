import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

const GameCard = ({game}) => {
  return (
    <Card  borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms}/>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard