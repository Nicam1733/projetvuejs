<template lang="html">
	<div class="main-container">
		<div class="movie-detail-content">
			<v-btn @click="backToHome" color='primary'>Retour</v-btn><br>
			<v-container fluid grid-list-md>
				<div  style="display:flex;">
					<div style="padding-right:6rem; margin-left: 6rem;">
						<img class="affiche" :src="movie.affiche">
					</div>
					<div style="margin-top:-2rem;">
						<h1>{{movie.title}}</h1><br>
						<div>
							<h3>Réalisateur : </h3>{{movie.director.name}} - {{movie.director.nationalite}} - {{movie.director.birthDate}}<br/>
							<h3>Sortie : </h3>{{movie.year}}<br/>
							<h3>Genre : </h3>{{movie.genre}}<br/>
						</div>
						<br>
						<v-layout row>
							<v-flex>
								<h2>Résumé :</h2>
								<p style="text-align:justify;">{{movie.resume}}</p>
							</v-flex>
						</v-layout>
					</div>
				</div>
				<br><br>
				<div>
					<router-link :to="{path: '/movie/' + movie.id + '/edit', params: { id: movie.id }}"> 
						<v-btn color='success'>Modifier la fiche</v-btn> 
					</router-link>
				</div>
			</v-container>
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
                'id' : this.$route.params.id
            }
        },
        computed: {
            movie: function() {
                return this.$store.state.currentMovie
            }
        },
        methods:{
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

	h1 {
		margin-top: 30px;
		text-transform: uppercase;
	}

	.affiche {
		width: 280px;
		margin-left: 1%;
		margin-top: 18px;
		margin-bottom: 18px;
		border-radius: 5px;
	}

</style>
