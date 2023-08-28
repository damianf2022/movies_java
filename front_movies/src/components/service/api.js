import baseURL from './axiosConfig';
const BASE_URL = { baseURL };


const api = {
    getMovies: async () => {
        try {
            const response = await baseURL.get("http://localhost:8080/api/v1/movies");
            console.log("API Response:", response.data);
            return response.data;
        } catch (error) {
            console.log("API Error:", error);
            return [];
        }
    },

    getMovieById: async (imdbId) => {
        try {
          const response = await baseURL.get(`http://localhost:8080/api/v1/movies/${imdbId}`);
          console.log(response.data,"DATA");
          return response.data;
        } catch (error) {
          console.error('Error al obtener los detalles de la película:', error);
          return null;
        }
      },
    };

export default api;
