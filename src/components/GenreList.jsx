import React from 'react'
import useGenre from '../hooks/useGenre'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

const GenreList = ({onSelectGenre, selectedGenre}) => {
  
  const {data, loading, error} = useGenre()

  if(error) return null
  if(loading) return <Spinner/>
    
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
          {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
              <Button whiteSpace='normal' textAlign='left' fontSize='lg' variant='link'
              onClick={() => onSelectGenre(genre)} 
              fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>)}
      </List>
    </>
  )
}

export default GenreList