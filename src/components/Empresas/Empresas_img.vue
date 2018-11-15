<template>
	<div class="app">
		<v-layout row wrap>
			<v-flex xs1>
		    <v-card-text class="text-xs-center">
		    	<a @click="back">
		    		<v-icon>fas fa-arrow-left</v-icon>
		    	</a>
		    </v-card-text>
		  </v-flex>
		  <v-flex xs10>
		    <v-card-text class="text-xs-center">
		      Empresa
		    </v-card-text>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>
		<v-layout row wrap class="mt-1">
	  	 <v-flex xs12 sm12 md9 lg9 SG9 offset-md2>
		  	<v-card>
		        <img :src="img_empresas" alt="" height="400px" 
		        style="width: 100%;" >
		      </v-card>			
		  </v-flex>
	  	</v-flex>
	</v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='empresa_img'
// let link='http://localhost:3000/images/'
	export default{
		name:'Empresas_img',
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en video',data)
				this.img_empresas=link+data[0].img
			})
		},
		data(){
			return{
				img_empresas:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>