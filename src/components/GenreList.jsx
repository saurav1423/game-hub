import React from 'react'
import useGenre from '../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

const GenreList = ({onSelectGenre, selectedGenre}) => {
  
  const {data, loading, error} = useGenre()

  if(error) return null
  if(loading) return <Spinner/>
    
  return (
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontSize='lg' variant='link'
             onClick={() => onSelectGenre(genre)} 
             fontWeight={genre.id == selectedGenre.id ? 'bold' : 'normal'}>
               {genre.name}
            </Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList