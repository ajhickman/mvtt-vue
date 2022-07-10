
<script>
export default {
  data() {
    return {
      movies: [],
      // title: '',
      // desc: '',
      // year: '',
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://localhost:5001/api/MoviesAPI/");
        this.movies = await response.json();;
      } catch (error) {
        console.log(error);
      }
      },
    
    created() {
      this.getData();
    },

    // addmovie() {
    //     console.log("Adding Movie?");

    //     const requestOptions = {
    //       method: "POST",
    //       mode: 'cors',
    //       headers: {"Content-Type": "application/json"}, 
    //       body: JSON.stringify({name: '${this.title}', description: '${this.desc}', year: '${this.year}'})
    //     };

    //     fetch("https://localhost:5001/api/MoviesAPI/", requestOptions)
    //     .then(response => response.json())
    //     .then(data => (this.postId = data.id));
    // },

    // logthis() {
    //   console.log('Testing.')
    //   alert('Testing.')
    // },
  },
}
</script>



<template>

  <main>
    <h1> Mayvue Movie Tech Test </h1>

    <!-- <div>
      <label>Title: <input v-model="title"></label>
      <label>Description: <input v-model="desc"></label>
      <label>Release Year: <input v-model="year"></label>
      <br>
      <button @click="addmovie"> Add new <font-awesome-icon :icon="['fas', 'plus']" /></button>
      <br>
      <button @click="logthis"> Testing </button>
      <br>
    </div> -->

    <div>
      <table>
        <tr>
          <th> Title </th><th> Description </th><th> Year </th><th> Actions </th>
        </tr> 
        <tr v-for="movie in movies" v-bind:key=
        "movie.id">
          <td> {{ movie.name }} </td>
          <td> {{ movie.description }}</td>
          <td> {{ movie.year }}</td>
          <td> <font-awesome-icon :icon="['fas', 'copy']" /> | <font-awesome-icon :icon="['fas', 'pen']" /> </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
th {
  padding: 1em;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
