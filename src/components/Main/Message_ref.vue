<template>
	<v-layout row wrap>
	  <v-flex xs12>
	    <v-card dark color="azul_claro">
          <v-card-text class="text-xs-center headline blanco--text font-weight-black border">"{{text_ref}}"</v-card-text>
        </v-card>
	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='lema'
// let link='http://localhost:3000/images/'
	export default{
		name:'Message_ref',
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en lema',data)
				this.text_ref=data[0].content.toUpperCase()
			})
		},
		data(){
			return{
				text_ref:'',
			}
		}
	}
</script>
<style>
	.border{
	-webkit-text-stroke: 1px black;
}
</style>