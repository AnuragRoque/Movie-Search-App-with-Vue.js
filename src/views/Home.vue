<template>
  <div>
    <header>
      <h1>Welcome to Movies!</h1>
    </header>
    <div>
      <input type="text" placeholder="Search by movie name" v-model="searchQuery" />
      <button @click="searchMovies">Search</button>
    </div>
    <ul>
      <li v-for="movie in filteredMovies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      searchQuery: '',
    };
  },
  mounted() {
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.movies.filter(movie => movie.title.toLowerCase().includes(query));
      }
      return this.movies;
    },
  },
  methods: {
    fetchMovies() {
      axios.get('assets/json/movies.json')
        .then(response => {
          this.movies = response.data;
        })
        .catch((error) => {
        // Handle the error gracefully or show a user-friendly message
        //console.error(error);
        console.error(error); // eslint-disable-line no-console

      });
    },
    searchMovies() {
      // Implement debounce or throttle function here to delay API requests
      // based on user input
      // Example: debounce(this.fetchMovies, 300);
      this.fetchMovies();
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
  cursor: pointer;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
