import MovieCard from "../components/movie-card.jsx";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api.js";    

function Home() {
    //This is useful for managing the state of the search query, and using onChange inside the input field to update the state as the user types.

    //The useState hook is used to create a state variable called searchQuery, which is initialized to an empty string. The setSearchQuery function is used to update the value of searchQuery.


    //used for real time search functionality, allowing the user to type in a search term and see results immediately.
    
    const [searchQuery, setSearchQuery] = useState("");
    
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const LoadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError("Failed to load movies.");
                console.error(error);
                
            } finally {
                setLoading(false);
            }
        }
        LoadPopularMovies();
    }, [])



    // Function to handle search submission

        const handleSearchSubmit = async (e) => {
            e.preventDefault(); 
            // Prevent the default form submission behavior, which would refresh the page.
            if (searchQuery.trim() === "") {
                setMovies([]); // Clear movies if search query is empty
                return;
            }
            if (loading){
                return
            }
            setLoading(true);

            try{
                const searchResults = await searchMovies(searchQuery);
                setMovies(searchResults);
                setError(null); // Clear any previous errors

            } catch (error) {
                setError("Failed to search movies.");
                console.error(error);
            } finally{
                setLoading(false);
            }
        };




  return (
    <div className="home">
        <form onSubmit={handleSearchSubmit} className="search-form">
            <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}/> 
            
            <button type="submit" className="search-button">Search</button> 
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? <div>Loading movies...</div> : 
        <div className="movies-grid"> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
          
          
          //key is essential for React to identify which items have changed, are added, or are removed even if we did not use it in the previous code.
        ))}
      </div>}
      
    </div>
  );
}

export default Home;