<template>
	<v-carousel>
	    <v-carousel-item
	      v-for="(item_carousel_view,index) in items_carouse"
	      :key="index"
	      :src="item_carousel_view.src"
	      reverse-transition="fade"
      	  transition="fade"
	    >
	    <v-card-text class="display-3 blanco--text font-weight-regular font-italic animated bounceInUp border">
	      {{item_carousel_view.title}}
	    </v-card-text>
	    </v-carousel-item>
  </v-carousel>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let carousel='carrusel'
// let link='http://localhost:3000/images/'
	export default{
		name:'Carousel',
		mounted(){
			Download_content.Download_all_tags(carousel)
			EventBus.$on(carousel,data=>{
				this.items_carouse=[]
				for(let index in data){
						this.items_carouse.push({
						title:data[index].title,
						src:link+data[index].img
					})
				}
			})
		},
		data(){
			return{
				// items_carouse: [
		  //         {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
		  //         {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
		  //         {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
		  //         {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
		  //       ]
		  	items_carouse: [
		          {src:''},
		        ]
			}
		},
		methods:{

		}
	}
</script>
<style>
	  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
 
.fade-enter-active {
  transition-delay: .25s;
}
 
.fade-enter, .fade-leave-active {
  opacity: 0
}
.border{
	-webkit-text-stroke: 2px black;
}
</style>