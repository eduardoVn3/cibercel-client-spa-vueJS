<template>
	<v-layout row wrap>
		<v-divider></v-divider>
		<v-divider></v-divider>
	  <v-flex xs12>
	  	<div v-for="(items_content_empresas,index) in content_empresas" :key="items_content_empresas.title">
	  		<v-card color="azul_claro">
	  			<v-card-text class="text-xs-center title blanco--text">
		    		{{items_content_empresas.title}}
		    	</v-card-text>
			</v-card>
			<v-card>
			  	<v-card-text class="text-xs-center">
	        		<p class="text-xs-center mt-3">{{items_content_empresas.text}}</p>
	      		</v-card-text>
			</v-card>
	  	</div>
		<v-divider></v-divider>
	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='empresa_contenido'
let title2='empresa_instituciones_educativas'
let title3='empresa_talleres_tecnicos'
// let link='http://localhost:3000/images/'
	export default{
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en video',data)
				this.content_empresas.push({
					title:data[0].title,
					text:data[0].content,
				})
			})
			Download_content.Download_all_tags(title2)
			EventBus.$on(title2,data=>{
				// console.log('recibiendo en intituciones educativas',data)
				this.content_empresas.push({
					title:data[0].title,
					text:data[0].content,
				})
				// alert('instituciones')
			})

			Download_content.Download_all_tags(title3)
			EventBus.$on(title3,data=>{
				// console.log('recibiendo en talleres',data)
				this.content_empresas.push({
					title:data[0].title,
					text:data[0].content,
				})
			})
		},
		data(){
			return{
				content_empresas:[
					// {title:'Empresas',ico:'',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
					// {title:'Instituciones Educativas',ico:'',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
					// {title:'Talleres Tecnicos',ico:'',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
				]
			}
		}
	}
</script>