import { useState, useEffect } from "react"
import movies from "./assets/data/data"

function App() {


  //initial movies
  const [InitialMovies, setInitialMovies] = useState(movies)

  // for select the genre
  const [selectedGenre, setSelectedGenre] = useState('');

  //for the filtered movies
  const [filteredMovies, setFilteredMovies] = useState(InitialMovies);


  const genres = [...new Set (movies.map((movie)=> movie.genre))]

  // for filtering of the movies
  useEffect(() => {
    let result = movies;
      

    if (selectedGenre !== '') {
      result = result.filter(
        (movie) => movie.genre === selectedGenre
      );
    } setFilteredMovies(result);
  }, [movies, selectedGenre]);



  return (
    <>
      <h1> Film List</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}>
           <option value={``}> Seleziona Genere </option>
        {genres.map((genre,i) => (
          <option key={i} value={genre}>
            {genre}
          </option>
        ))}
      </select>


      <ul>
        {filteredMovies.map((movie,i)=>(
          <li key={i}> {movie.title}  </li>
        ))}
      </ul>
    </>
  )
}

export default App
