import "../css/Favorites.css";
import { useMovieContext,  } from "../contexts/MovieContext";
import MovieCard from "../components/movie-card";


function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return
    }
    return (
        <div className="favorites-empty">
            <h2>Your Favorites</h2>
            <p>You have no favorite movies yet.</p> 
        </div>
        
    );
}

export default Favorites;