<template lang="html">
    <div class="main-container">
        <div class="form-edit-content">
            <h1>MODIFICATION DU FILM : {{movie.title}}</h1>
            <br>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                    label="Nom "
                    v-model="movie.title"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Année de sortie "
                    v-model="movie.year"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nom réalisteur "
                    v-model="movie.director.name"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Date naissance réalisteur "
                    v-model="movie.director.birthDate"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nationalité du réalisateur "
                    v-model="movie.director.nationalite"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-select
                    label="Genre"
                    v-model="movie.genre"
                    :rules="requiredRules"
                    :items="items"
                    append-icon
                    required
                ></v-select>
                <v-text-field
                    name="resume"
                    label="Résumé"
                    v-model="movie.resume"
                    :rules="requiredRules"
                    textarea
                ></v-text-field>
                <br>
                <v-btn color='success'
                    @click="submit"
                    :disabled="!valid"
                >
                    Sauvegarder
                </v-btn>
                <v-btn @click="backToHome" color='error'>Annuler</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>

    export default {

        created() {
    		this.$store.dispatch('getMovie', this.$route.params.id)
        },
        
        data() {
            return {
                id: this.$route.params.id,
                valid: true,
                items: [
                    'Action',
                    'Guerre',
                    'Drame',
                    'Animation',
                    'Aventure',
                    'Comédie',
                    'Thriller',
                    'Boxe',
                    'Science ficiton'
                ],
                requiredRules: [
                    v => !!v || "Ce champ est requis.",
                ],
            }
        },

        computed: {
            movie: function() {
                return this.$store.state.currentMovie
            }
        },

        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    const movie = {
                        id: this.movie.id,
                        title: this.movie.title,
                        year: this.movie.year,
                        genre: this.movie.genre,
                        resume: this.movie.resume,
                        affiche: this.movie.affiche,
                    };

                    movie.director = {
                        name: this.movie.director.name,
                        birthDate: this.movie.director.birthDate,
                        nationalite: this.movie.director.nationalite,
                    };

                    this.$store.dispatch('updateMovie', movie)
                        .then( () => {
                            this.$router.push({ path: `/movie/${this.movie.id}`, params: { id: this.movie.id } })
                        }
                    )
                }
            },
            backToHome : function() {
				this.$router.push({ path: `/` })
			}
        }
    }
</script>

<style lang="css">

    .main-container {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 400px;
        padding-right: 400px;
        text-align: center;
    }

    .form-edit-content hr {
        margin-bottom: 20px;
    }

    .inline {
        display: inline;
    }

    .form-edit-content input[type="file"] {
        display: none;
    }
</style>
