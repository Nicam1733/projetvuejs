<template>
    <div style="width:70%; margin-left: auto; margin-right: auto; padding-top: 50px; padding-bottom: 50px;">

        <div class="container-center">
            <h1 style="text-align: center;">Liste des films ({{movies.length}})</h1>
            <router-link :to="{path: '/addMovie'}"> 
                <v-btn color='primary'>Ajouter un nouveau film à la liste</v-btn> 
            </router-link>

            <v-text-field type="text" label='Recherche :' v-model="search" style="width:30%; margin-left: 32rem;"/>
            <ul style="list-style: none">
                <movie-item style="margin-left: 29rem;" v-for="(movie) in movies_search" v-bind:key="movie.title" v-bind:movieitem="movie" v-on:edit="edit(movie)"></movie-item>
            </ul>
        </div>

    </div>
</template>

<script>

export default {

    created: function() {
        this.$store.dispatch('getMovieList')
    },

    data() {
        return {
            movie_to_add: {},
            movie_to_edit: null,
            search: ""
        }
    },

    computed: {
        movies: function() {
            return this.$store.state.movies
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1)
        }
    }
}
</script>

<style lang="css">

.container-center {
    text-align: center;
}

</style>
