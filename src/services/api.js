

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3"; // Base URL for the API


export const getPopularMovies = async () => { 
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    //You might wanna remove "&language=en-US&page=${page}`);"

    const data = await response.json();
    return data.results; // Return the list of popular movies
};

export const searchMovies = async (query) => { 
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`);
    //You might wanna remove langueage preferences

    const data = await response.json();
    return data.results; // Return the list of popular movies
};

