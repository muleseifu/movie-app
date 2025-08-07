import "../css/Favorites.css";
import { useMovieContext  } from "../contexts/MovieContext";
import MovieCard from "../components/movie-card";


function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />


            //key is essential for React to identify which items have changed, are added, or are removed even if we did not use it in the previous code.
          ))}
        </div>
        </div>
        )
    }
    return (
        <div className="favorites-empty">
            <h2>Your Favorites</h2>
            <p>You have no favorite movies yet.</p> 
        </div>
        
    );
}

export default Favorites;