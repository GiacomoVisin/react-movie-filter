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

  function HandleAddMovie(e) {
    e.preventDefault()

     const movieExists = InitialMovies.some(
    (movie) =>
      movie.title.toLowerCase() === newTitleFilm.toLowerCase()
  );

  if (movieExists) {
    alert("There is already a film with this title, please change it!");
    return;
  }
    const newMovie = {
      title: newTitleFilm,
      genre: newGenreFilm
    }
    


    setInitialMovies([...InitialMovies, newMovie])
    setNewTitle('');
    setNewGenre('');
  }



  const [newTitleFilm, setNewTitleFilm] = useState('');
  const [newGenreFilm, setNewGenreFilm] = useState('');



  const genres = [...new Set(InitialMovies.map((movie) => movie.genre))]

  // for filtering of the movies
  useEffect(() => {
    let result = InitialMovies;


    if (selectedGenre !== '') {
      result = result.filter(
        (movie) => movie.genre === selectedGenre
      );
    }

    if (searchTitle !== ``) {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
    } setFilteredMovies(result);

  }, [InitialMovies, selectedGenre, searchTitle]);



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

      <form onSubmit={HandleAddMovie}>
        <input type="text" value={newTitleFilm} onChange={(e)=> setNewTitleFilm(e.target.value)}  placeholder="type name for new movie"/>
        <input type="text" value={newGenreFilm} onChange={(e)=> setNewGenreFilm(e.target.value)}   placeholder="type genre for new movie"/>
        <button> Add new Films</button>
      </form>
    </>
  )
}

export default App
