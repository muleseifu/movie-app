import MovieCard from "../components/movie-card.jsx";
import { useState } from "react";

function Home() {
    //This is useful for managing the state of the search query, and using onChange inside the input field to update the state as the user types.

    //The useState hook is used to create a state variable called searchQuery, which is initialized to an empty string. The setSearchQuery function is used to update the value of searchQuery.


    //used for real time search functionality, allowing the user to type in a search term and see results immediately.
    
    const [searchQuery, setSearchQuery] = useState("");
    
    const movies = [
        { id: 1, Title: "Inception", Year: "2010", Poster: "https://example.com/inception.jpg" },
        { id: 2, Title: "The Matrix", Year: "1999", Poster: "https://  example.com/matrix.jpg" },
        { id: 3, Title: "Interstellar", Year: "2014", Poster: "https://example.com/interstellar.jpg" }, 
        { id: 4, Title: "The Dark Knight", Year: "2008", Poster: "https://example.com/darkknight.jpg" }, 
        { id: 5, Title: "Pulp Fiction", Year: "1994", Poster: "https://example.com/pulpfiction.jpg" }, 
        { id: 6, Title: "Forrest Gump", Year: "1994", Poster: "https://example.com/forrestgump.jpg" }]

    // Function to handle search submission

        const handleSearchSubmit = (e) => {
            e.preventDefault(); // Prevent the default form submission behavior, which would refresh the page.
            alert(`Searching for: ${searchQuery}`);
        
        }




  return (
    <div className="home">
        <form onSubmit={handleSearchSubmit} className="search-form">
            <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}/> 
            
            <button type="submit" className="search-button">Search</button> 
        </form>
      <div class name="movies-grid"> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
          
          
          //key is essential for React to identify which items have changed, are added, or are removed even if we did not use it in the previous code.
        ))}
      </div>
    </div>
  );
}

export default Home;