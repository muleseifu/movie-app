
function MovieCard({movie}) {

    function handleFavoriteClick() {
        // Logic to handle favorite click
        alert(`Added ${movie.Title} to favorites!`);

    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={handleFavoriteClick}> 
                    &hearts; 
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>

        </div>
    );


}

export default MovieCard;
