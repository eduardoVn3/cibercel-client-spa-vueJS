<template>
	<v-layout align-center justify-center row fill-height class="content_loader">
	  <v-flex xs12>
	    <!-- <v-card> -->
	    	<img src="@/assets/loader.svg" alt="">
	    <!-- </v-card> -->
	  </v-flex>
	</v-layout>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style>
	.content_loader{
		width: 100%;
		height: 100vh;
		position: relative;
		z-index: 9998;
		background-color: white;
		opacity: 1;
	}
	.content_loader img{
		width: 100%;
		height: 250px;
		animation-name: content_loader_img;
  		animation-duration: 2s;
  		animation-timing-function: linear;
  		animation-iteration-count: infinite;

  		-webkit-animation-name:content_loader_img;
  		-webkit-animation-duration: 2s;
  		-webkit-animation-timing-function: linear;
  		-webkit-animation-iteration-count: infinite;
	}
	@-moz-keyframes content_loader_img{  
 	 0% { opacity: 1.0; }
	  25% { opacity: 0.5; }
	  50% { opacity: 0.0; }
	  25% { opacity: 0.5; }
	  100% { opacity: 1.0; }
}

	@-webkit-keyframes content_loader_img {  
	  0% { opacity: 1.0; }
	  25% { opacity: 0.5; }
	  50% { opacity: 0.0; }
	  25% { opacity: 0.5; }
	  100% { opacity: 1.0; }
	}

	@keyframes content_loader_img {  
	  0% { opacity: 1.0; }
	  25% { opacity: 0.5; }
	  50% { opacity: 0.0; }
	  25% { opacity: 0.5; }
	  100% { opacity: 1.0; }
	}
</style>