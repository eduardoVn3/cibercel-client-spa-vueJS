<template>
	<v-layout row wrap color="navbar">
			<v-flex xs1>
		    <v-card-text class="text-xs-center">
		    	<a @click="back">
		    		<v-icon>fas fa-arrow-left</v-icon>
		    	</a>
		    </v-card-text>
		  </v-flex>
		  <v-flex xs10>
		    <v-card-text class="text-xs-center">
		      Panel Admin
		    </v-card-text>
		  </v-flex>
		</v-layout>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			back(){
				this.$router.replace('/')
				window.localStorage.removeItem('cibercel_storage_login');
			}
		}
	}
</script>