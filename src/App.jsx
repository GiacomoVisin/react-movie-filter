import { useState, useEffect } from "react"
import movies from "./assets/data/data"

function App() {


  //initial movies
  const [InitialMovies, setInitialMovies] = useState(movies)

  // for select the genre
  const [selectedGenre, setSelectedGenre] = useState('');

  // for the filtered movies
  const [filteredMovies, setFilteredMovies] = useState(InitialMovies);

  // for filter the film by title
  const [searchTitle, setSearchTitle] = useState(``)

  const genres = [...new Set(movies.map((movie) => movie.genre))]

  // for filtering of the movies
  useEffect(() => {
    let result = movies;


    if (selectedGenre !== '') {
      result = result.filter(
        (movie) => movie.genre === selectedGenre
      );
    } 

    if (searchTitle !== ``) {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
    }setFilteredMovies(result);

  }, [movies, selectedGenre, searchTitle]);



  return (
    <>
      <h1> Film List</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value={``}> Seleziona Genere </option>
        {genres.map((genre, i) => (
          <option key={i} value={genre}>
            {genre}
          </option>
        ))}
      </select>



      <input type="text" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />

      <ul>
        {filteredMovies.map((movie, i) => (
          <li key={i}> {movie.title}  </li>
        ))}
      </ul>
    </>
  )
}

export default App
