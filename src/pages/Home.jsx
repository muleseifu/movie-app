import MovieCard from "../components/movie-card.jsx";

function Home() {
    const movies = [
        { id: 1, Title: "Inception", Year: "2010", Poster: "https://example.com/inception.jpg" },
        { id: 2, Title: "The Matrix", Year: "1999", Poster: "https://  example.com/matrix.jpg" },
        { id: 3, Title: "Interstellar", Year: "2014", Poster: "https://example.com/interstellar.jpg" }, 
        { id: 4, Title: "The Dark Knight", Year: "2008", Poster: "https://example.com/darkknight.jpg" }, 
        { id: 5, Title: "Pulp Fiction", Year: "1994", Poster: "https://example.com/pulpfiction.jpg" }, 
        { id: 6, Title: "Forrest Gump", Year: "1994", Poster: "https://example.com/forrestgump.jpg" }]

    // Function to handle search submission
    
        const handleSearchSubmit = () => {
        
        }




  return (
    <div className="home">
        <form onSubmit={handleSearchSubmit} className="search-form">
            <input type="text" placeholder="Search for a movie..." className="search-input"/>
            <button type="submit">Search</button>
        </form>
      <div class name="movie-grid"> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} /> //key is essential for React to identify which items have changed, are added, or are removed even if we did not use it in the previous code.
        ))}
      </div>
    </div>
  );
}

export default Home;