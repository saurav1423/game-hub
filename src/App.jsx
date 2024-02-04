import { Flex, Grid, GridItem, Box, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {

  // const [selectedGenre, setSelectedGenre] = useState(null)
  // const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [gameQuery, setGameQuery] = useState({selectedGenre: null, selectedPlatform: null, sortOrder: '', searchValue: ''})

   console.log(gameQuery.searchValue)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px'
        }}
      >
          <GridItem area="nav">
            <Navbar onSearch={(searchValue) => setGameQuery({...gameQuery, searchValue})} />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5} marginY={9}>
              <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, selectedGenre: genre})} 
                selectedGenre={gameQuery.selectedGenre} />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={10} >
              <GameHeading gameQuery={gameQuery} />
              <Flex marginBottom={5}>
                <Box marginRight={5}>
                <PlatformSelector selectedPlatform={gameQuery.selectedPlatform} 
                onPlatformSelect={(platform) => setGameQuery({...gameQuery, selectedPlatform: platform})} />
                </Box>
                <SortSelector selectedSort={gameQuery.sortOrder} onSelectSortOrder= {(sortOrder) => setGameQuery({...gameQuery, sortOrder:sortOrder })} />
              </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery}/>
          </GridItem>
      </Grid>
    </>
  )
}

export default App
