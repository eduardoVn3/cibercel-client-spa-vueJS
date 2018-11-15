<template>
	<div class="app" v-if="view">
	<v-divider></v-divider>
	<v-layout row wrap>
	  <v-flex xs12 sm6 offset-sm3>
	      <v-card>
	        <v-list two-line>
	          <template v-for="(item_nav_options_items, index) in nav_options_items">
	            <v-divider
	              :inset="item_nav_options_items.inset"
	              :key="index"
	            ></v-divider>

	            <v-list-tile
	              :key="item_nav_options_items.title"
	              avatar
	              @click="view_nav_options_items(item_nav_options_items)"
	            >
	              <v-list-tile-avatar>
	                <v-icon>{{item_nav_options_items.ico}}</v-icon>
	              </v-list-tile-avatar>

	              <v-list-tile-content>
	                <v-list-tile-title v-html="item_nav_options_items.title"></v-list-tile-title>
	                <v-list-tile-sub-title v-html="item_nav_options_items.subtitle"></v-list-tile-sub-title>
	              </v-list-tile-content>
	            </v-list-tile>
	          </template>
	        </v-list>
	      </v-card>
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
		name:'Nav_options_courses',
		mounted(){
			Download_content.Download_all_courses()
			EventBus.$on('courses-all',data=>{
				// console.log('recibiendo en video',data)
				for(let index in data){
					this.nav_options_items.push({
						id:data[index].id,
						title:data[index].title,
						subtitle:data[index].subtitle,
						content:data[index].content,
						ico:data[index].ico,
						img:data[index].img
					})
				}
			})
			EventBus.$on('view-list',data=>{
				this.view=data
			})
		},
		data(){
			return{
				view:true,
				nav_options_items:[
					// {
					// 	title:'HARDWARE',
					// 	subtitle:'Reparacion profesional de celulares y tablets',
					// 	ico:'fas fa-wrench',
					// 	img:'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
					// 	content_course_objetive:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					// 	tab_options:[
					// 		{title:'Horario',ico:'fas fa-clock',content:[
					// 			{title:'Modalidad Normal',ico:'',content:[
					// 				{hour:'2:40'}
					// 			]},
					// 			{title:'Modalidad Intensiva',ico:''},
					// 		]},
					// 		{title:'Temario Modulo 1',ico:'fas fa-clipboard-list'},
					// 		{title:'Temario Modulo 2',ico:'fas fa-clipboard-list'},
					// 	],
					// 	path:''},
					// {title:'SOFTWARE',subtitle:'Reparacion profesional de celulares y tablets',ico:'fas fa-wrench',path:''},
					// {title:'SOFTWARE y HARDWARE',subtitle:'Especializacion',ico:'fas fa-wrench',path:''},
				]
			}
		},
		methods:{
			view_nav_options_items(item){
				console.log(item)
				EventBus.$emit('data-courses',{data:item,view:true,route:'modules/'})
				this.view=false
			},
		}
	}
</script>