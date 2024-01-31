import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {

  // const [selectedGenre, setSelectedGenre] = useState(null)
  // const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [gameQuery, setGameQuery] = useState({selectedGenre: null, selectedPlatform: null})

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
            <Navbar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5} marginY={9}>
              <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, selectedGenre: genre})} 
                selectedGenre={gameQuery.selectedGenre} />
            </GridItem>
          </Show>
          <GridItem area="main">
            <HStack paddingLeft={10} spacing={6}>
              <PlatformSelector selectedPlatform={gameQuery.selectedPlatform} 
              onPlatformSelect={(platform) => setGameQuery({...gameQuery, selectedPlatform: platform})} />
              <SortSelector/>
            </HStack>
            <GameGrid selectedGenre={gameQuery.selectedGenre} selectedPlatform={gameQuery.selectedPlatform} />
          </GridItem>
      </Grid>
    </>
  )
}

export default App
