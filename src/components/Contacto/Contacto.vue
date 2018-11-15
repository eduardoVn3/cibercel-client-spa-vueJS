<template>
	<div class="app">
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
		      Contacto
		    </v-card-text>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>
		<v-layout row wrap color="azul_claro">
		  <v-flex xs12>
		    <v-card color="azul_claro">
		      <v-card-text class="text-xs-start title blanco--text">
		        Datos de Contacto
		      </v-card-text>
		    </v-card>
		  </v-flex>

		  <v-flex xs12>
		    <v-card>
		      <v-card-text class="text-xs-start" v-for="(items_content_contacto,index) in content_contacto"
		      :key="items_content_contacto.title">
		      	<v-icon>{{ items_content_contacto.ico }}</v-icon>
		      	{{items_content_contacto.title}} : {{items_content_contacto.text}}
		      </v-card-text>
		      <v-card-text class="text-xs-start">
		      	{{map.title}}
		      </v-card-text>
				<iframe :src="map.text" width="100%" height="310" frameborder="0" style="border:0" allowfullscreen></iframe>
		    </v-card>
		  </v-flex>
		</v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='Contacto_telefono_fijo'
let title2='Contacto_email'
let title3='Contacto_direccion'
let title4='Contacto_mapa'
// let link='http://localhost:3000/images/'
	export default{
		name:'Contacto',
		components:{

		},
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en contacto telefono',data)
				this.content_contacto.push({
					title:data[0].title,
					text:data[0].content
				})
			})
			//email
			Download_content.Download_all_tags(title2)
			EventBus.$on(title2,data=>{
				// console.log('recibiendo en contacto telefono',data)
				this.content_contacto.push({
					title:data[0].title,
					text:data[0].content
				})
			})

			//direccion
			Download_content.Download_all_tags(title3)
			EventBus.$on(title3,data=>{
				// console.log('recibiendo en contacto telefono',data)
				this.content_contacto.push({
					title:data[0].title,
					text:data[0].content
				})
			})

			//mapa
			Download_content.Download_all_tags(title4)
			EventBus.$on(title4,data=>{
				// console.log('recibiendo en contacto telefono',data)
				this.map={
					title:data[0].title,
					text:data[0].content
				}
			})
		},
		data(){
			return{
				title_contact:'',
				content_contacto:[
					// {title:'Telefono',ico:'',text:'202020'},
					// {title:'Email',ico:'',text:'info@cibercel.com'},
					// {title:'Direccion',ico:'',text:'Calle otero 261 arequipa-arequipa'},
				],
				// map:{title:'Encuentranos',ico:'',text:'https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d1137.8899349619107!2d-71.53172351590645!3d-16.40499400315908!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d-16.4049028!2d-71.53134709999999!5e0!3m2!1ses!2spe!4v1531844519018'}
				map:{title:''}
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>