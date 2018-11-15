<template>
	<div class="app">
		<v-divider></v-divider>
		<v-layout row wrap>
		  <v-flex xs12>
		  	<v-card color="azul_claro">
		  	  <v-card-text class="text-xs-center title blanco--text">
		      Nuestros Cursos
		    </v-card-text>
		  	</v-card>
		  </v-flex>
		</v-layout>
		<v-layout  wrap mb-2 mt-2 align-center justify-center row fill-height>
		  <v-flex xs12 sm12 md12 lg2 SG2 v-for="(items_course_information,index) in modules"
		  :key="items_course_information.section">
		  <a @click="view_data_couses(items_course_information)">
				        	<v-card class="courses_hover">
						        <v-card-media
						          :src="items_course_information.img"
						          height="200px"
					          ></v-card-media>
					          <v-card-title primary-title>
						          <div>
						          	<v-chip label outline color="red">Modulo: {{items_course_information.title}}</v-chip>
						          </div>
						        </v-card-title>
				        	</v-card>
				        </a>
		    <!-- </v-card> -->
		  </v-flex>
		</v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
// let link='http://localhost:3000/images/'
	export default{
		name:'Course_information',
		mounted(){
			Download_content.Index_modules()
			this.modules=[]
			EventBus.$on('modules-list_route',data=>{
				for(let index in data){
					if(index<=6){
							this.modules.push({
							id:data[index].id,
							title:data[index].title,
							img:link+data[index].img,
							course_id:data[index].course_id
						})
					}
				}
			})
		},
		data(){
			return{
				modules:[],
			}
		},
		methods:{
			view_data_couses(item){
				// EventBus.$emit('class-list_nav',item)
				Download_content.Download_all_modules_class(item.id,'class/','class-list_route')
				this.$router.push('/clases')
				
			}
		}
	}
</script>
<style>
	.courses_hover:hover{
		-webkit-transform:scale(1.3);
		-moz-transform:scale(1.3);
		-ms-transform:scale(1.3);
		-o-transform:scale(1.3);
		transform:scale(1.3);
		z-index: 9999;
		-webkit-transition:all .9s ease; /* Safari y Chrome 
		-moz-transition:all .9s ease; /* Firefox */
		-o-transition:all .9s ease; /* IE 9 */
		-ms-transition:all .9s ease; /* Opera */
	}
</style>