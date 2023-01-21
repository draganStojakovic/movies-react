import ApiService from "./ApiService";
import axios from "axios";

class MovieService extends ApiService {
  async getAllMovies() {
    return await axios.get("http://localhost:8000/api/movies");
  }
  async show(id) {
    return await axios.get(`http://localhost:8000/api/movies/${id}`);
  }
  async add(movie) {
    await axios.post("http://localhost:8000/api/movies", movie);
  }
  async update(id, movie) {
    await axios.put(`http://localhost:8000/api/movies/${id}`, movie);
  }
  async delete(id) {
    await axios.delete(`http://localhost:8000/api/movies/${id}`);
  }
}

export const movieService = new MovieService();
