<template>
    <div class="main-container-item">
        <li> 
            <v-card class="v-card">
                <br><div>
                    <v-card-actions class="action-container">
                        <router-link :to="{path: '/movie/' + movieitem.id, params: { id: movieitem.id }}"> 
                            <v-btn color='primary'>Détails</v-btn> 
                        </router-link>
                        <router-link :to="{path: '/movie/' + movieitem.id + '/edit', params: { id: movieitem.id }}"> 
                            <v-btn color='success'>Modifier</v-btn> 
                        </router-link>
                        <v-btn color='error' v-on:click='deleteMovie(movieitem.id)'>Supprimer</v-btn>
                    </v-card-actions>
                </div><br>
                <div class="movie-container">
                    <v-img style="width:140px; height:209px; margin-left:10rem; border-radius:5px;" :src="movieitem.affiche"/>
                    <div>
                        <v-card-title>
                            <div>
                                <h3 style="font-size: large;">{{movieitem.title.substring(0, 24)}}</h3><br>
                                <p><b>Réalisateur</b> : <br>{{movieitem.director.name}} - {{movieitem.director.nationalite}} - {{movieitem.director.birthDate}} </p>
                                <p><b>Genre</b> : {{movieitem.genre}}</p>
                                <p style="text-align:justify"><b>Résumé</b> : {{movieitem.resume.substring(0, 140)}}...</p>
                                <p style="text-align:left; margin-top:-1rem;"><router-link :to="{path: '/movie/' + movieitem.id, params: { id: movieitem.id }}"> Suite ICI </router-link></p>
                            </div>
                        </v-card-title>
                    </div>
                </div>


            </v-card>
        </li> 
        <br/>
    </div>
</template>

<script>
export default {
    props: ['movieitem'],

    methods: {
        deleteMovie: function (id) {
			this.$store.dispatch('deleteMovie', id)
        },
        saveMovie: function(event){
            this.$emit('save')
        }
    }
}
</script>

<style lang="css">

    .main-container-item {
        margin: 20px; 
    }

    .action-container {
        display: flex;
        justify-content: space-between;
    }

    .v-card {
        border-radius: 10px;
        max-width: 30rem;
    }
</style>