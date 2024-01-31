import useData from './useData';

const useGames = (gameQuery) => useData('/games', {params: {genres: gameQuery.selectedGenre?.id, platforms: gameQuery.selectedPlatform?.id, ordering: gameQuery.sortOrder}}, [gameQuery])

export default useGames