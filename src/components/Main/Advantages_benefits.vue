<template>
	<div class="app">
		<v-divider></v-divider>
		<v-layout row wrap>
		  <v-flex xs12>
		  	<v-card color="azul_claro">
		  	  <v-card-text class="text-xs-center title blanco--text">
		        Ventajas y Beneficio de nuestros cursos
		      </v-card-text>
		  	</v-card>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>
		<!-- <v-container> -->
			<v-layout row wrap class="justify-center mr-3 mt-2 mb-2">
			    <v-flex xs12 sm12 md9 lg2 SG2 v-for="(items_advantages_benefits,index) in advantages_benefits" class="ml-1"
				:key="items_advantages_benefits.title"
			    >
				    <!-- <v-card> -->
				        <v-card-media
				          :src="items_advantages_benefits.img"
				          height="200px"
				        ></v-card-media>

				        <v-card-title primary-title>
				          <div >
				            <h4 class="headline mb-0 text-xs-center">{{items_advantages_benefits.title}}</h4>
				            <!-- <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div> -->
				          </div>
				        </v-card-title>
			        <!-- </v-card> -->
			    </v-flex>
		  </v-layout>
		<!-- </v-container> -->
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='ventajas_beneficios'
// let link='http://localhost:3000/images/'
	export default{
		name:'Sales_courses',
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en ventajas y beneficios',data)
				this.advantages_benefits=[]
				for(let index in data){
					if(index < 5){
						this.advantages_benefits.push({
							title:data[index].title,
							content:data[index].content,
							img:link+data[index].img,
						})
					}
				}
			})
		},
		data(){
			return{
				advantages_benefits:[
					{title:'',img:''}
				],
				// our_courses:[
				// 	{title:'jandjawjd',img:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
				// 	{title:'jandjawjd',img:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
				// 	{title:'jandjawjd',img:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
				// 	{title:'jandjawjd',img:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
				// 	{title:'jandjawjd',img:'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
				// ]
			}
		}
	}
</script>