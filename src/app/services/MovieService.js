import ApiService from "./ApiService";
// import axios from "axios";

class MovieService extends ApiService {
  async get() {
    return await this.client.get("/movies");
    // return await axios.get("http://localhost:8000/api/movies");  // ne radi ni ovako
  }
  async show(id) {
    return await this.client.get(`/movies/${id}`);
  }
  async add(movie) {
    await this.client.post("/movies", movie);
  }
  async update(id, movie) {
    await this.client.put(`/movies/${id}`, movie);
  }
  async delete(id) {
    await this.client.delete(`/movies/${id}`);
  }
}

export const movieService = new MovieService();
