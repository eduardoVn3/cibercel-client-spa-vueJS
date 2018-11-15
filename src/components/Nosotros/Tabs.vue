<template>
	<v-container>
	  
	<v-layout row wrap>
	  <v-flex xs12 sm12 md10 lg10 SG10 offset-md1>
	     <div>
		    <v-tabs
		      v-model="active"
		      color="azul_claro"
		      dark
		      slider-color="azul_oscuro"
		    >
		      <v-tab
		        v-for="tabs in tabs_content"
		        :key="tabs.title"
		        ripple
		       	class="white--text"
		      >
		        {{ tabs.title }}

		      </v-tab>
		      <v-tab-item
		        v-for="tabs in tabs_content"
		        :key="tabs.title"
		      >
		        <v-card flat>
		          <v-card-text>{{ tabs.text }}</v-card-text>
		        </v-card>
		      </v-tab-item>
		    </v-tabs>
		  </div>
	  </v-flex>
	</v-layout>

	</v-container>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='nosotos_sobre_nosotros'
let title2='nosotros_mision'
let title3='nosotros_vision'
let title4='nosotros_ofrecemos'
let title5='nosotros_valores'
// let link='http://localhost:3000/images/'
	export default{
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en page nostros , sobre nosotros',data)
				this.tabs_content.push({
					title:data[0].title,
					text:data[0].content
				})
			})
			//mision
			Download_content.Download_all_tags(title2)
			EventBus.$on(title2,data=>{
				// console.log('recibiendo en page nostros , mision',data)
				this.tabs_content.push({
					title:data[0].title,
					text:data[0].content
				})
			})
			//vision
			Download_content.Download_all_tags(title3)
			EventBus.$on(title3,data=>{
				// console.log('recibiendo en page nostros , mision',data)
				this.tabs_content.push({
					title:data[0].title,
					text:data[0].content
				})
			})
			//ofrecemos
			Download_content.Download_all_tags(title4)
			EventBus.$on(title4,data=>{
				// console.log('recibiendo en page nostros , mision',data)
				this.tabs_content.push({
					title:data[0].title,
					text:data[0].content
				})
			})

			//valores
			Download_content.Download_all_tags(title5)
			EventBus.$on(title5,data=>{
				// console.log('recibiendo en page nostros , mision',data)
				this.tabs_content.push({
					title:data[0].title,
					text:data[0].content
				})
			})
		},
		data(){
			return{
				active: null,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      			tabs_content:[
      				// {title:'Sobre Nosotros',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      				// {title:'Mision',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      				// {title:'Vision',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      				// {title:'Ofrecemos',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      				// {title:'Valores',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      			],
      			quanty:'daw'
			}
		},
		methods:{
			next () {
		       const active = parseInt(this.active)
		       this.active = (active < 2 ? active + 1 : 0)
		    }
		}
	}
</script>