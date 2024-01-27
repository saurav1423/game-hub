import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {

  const [selectedGenre, setSelectedGenre] = useState(null)

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
              <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
            </GridItem>
          </Show>
          <GridItem area="main">
            <PlatformSelector />
            <GameGrid selectedGenre={selectedGenre} />
          </GridItem>
      </Grid>
    </>
  )
}

export default App
