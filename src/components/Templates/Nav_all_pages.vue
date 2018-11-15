<template>
	<v-layout row wrap>
		<v-flex xs12>
	    <v-card-text class="text-xs-center">
	      <v-icon>iconName</v-icon>
	    </v-card-text>
	  </v-flex>
	  <v-flex xs12>
	    <v-card-text class="text-xs-center">
	      {{title_nav}}
	    </v-card-text>
	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
	export default{
		name:'Nav_all_pages',
		mounted(){
			alert('entro al nav')
			EventBus.$on('title_page_nav',data=>{
				// console.log(data)
				this.title_nav=data
				// console.log('this.title_nav',this.title_nav)
			})
		},
		data(){
			return{
				title_nav:''
			}
		}
	}
</script>