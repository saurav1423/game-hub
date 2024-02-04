import useData from './useData';

const useGames = (gameQuery) => useData('/games', 
{params: {genres: gameQuery.selectedGenre?.id, 
          platforms: gameQuery.selectedPlatform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchValue}}, 
          [gameQuery])

export default useGames