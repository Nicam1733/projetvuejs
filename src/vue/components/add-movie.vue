<template lang="html">
    <div class="form-edit-content">
        <div class="main-container">
            <h1>Ajout d'un film</h1>
            <br>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                    label="Nom du film "
                    v-model="movieToAdd.title"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Année de sortie "
                    v-model="movieToAdd.year"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nom du réalisateur "
                    v-model="movieToAdd.director.name"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Date de naissance du réalisteur "
                    v-model="movieToAdd.director.birthDate"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-text-field
                    label="Nationalité du réalisateur "
                    v-model="movieToAdd.director.nationalite"
                    :rules="requiredRules"
                    required
                ></v-text-field>
                <v-select
                    :items="items"
                    label="Genre du film "
                    v-model="movieToAdd.genre"
                    :rules="requiredRules"
                    append-icon
                    required
                ></v-select>
                <v-text-field
                    name="resume"
                    v-model="movieToAdd.resume"
                    :rules="requiredRules"
                    label="resume"
                    textarea
                    style="margin-top: 10px;"
                ></v-text-field>
                <br>
                <v-btn color='success'
                        @click="submit"
                        :disabled="!valid"
                >
                    AJouter
                </v-btn>
                <v-btn @click="backToHome" color='error'>Annuler</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>

    export default {
        
        data: () => ({
            valid: true,
            items: [
                'Action',
                'Animation',
                'Aventure',
                'Biographique',
                'Fantastique',
                'Comédie',
                'Drame',
                'Science ficiton'
            ],

            movieToAdd : {
                title: '',
                year: '',
                language: '',
                genre: null,
                director : {
                    name: '',
                    birthDate: '',
                    nationalite: '',
                },
                resume: '',
                affiche: ''
            },
            requiredRules: [
                v => !!v || "Ce champ est requis.",
            ],
        }),

        methods: {
            submit() {
                if (this.$refs.form.validate()) {

                    const movie = {
                        title: this.movieToAdd.title,
                        year: this.movieToAdd.year,
                        genre: this.movieToAdd.genre,
                        resume: this.movieToAdd.resume,
                        affiche: this.movieToAdd.affiche ? this.movieToAdd.affiche : '/../../static/affiche/no_affiche.jpg'
                    };

                    movie.director = {
                        name: this.movieToAdd.director.name,
                        birthDate: this.movieToAdd.director.birthDate,
                        nationalite: this.movieToAdd.director.nationalite,
                    };

                    this.$store.dispatch('addMovie', movie)
                        .then( (res) => {
                            console.log('réponse', res)
                            this.$router.push({ path: `/movie/${res.id}`, params: { id: res.id } })
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
