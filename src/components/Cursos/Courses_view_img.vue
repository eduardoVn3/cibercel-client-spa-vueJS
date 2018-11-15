<template>
	<v-layout row wrap  v-if="view"> 
	  <v-flex xs12>
	    <v-divider></v-divider>
		<!-- <v-layout row wrap >
	  	 <v-flex xs12 sm12 md6 lg6 SG6 offset-md3>
		  	<v-card>
		        <img :src="item_course.img" alt="" height="400px" 
		        style="width: 100%;">
		    </v-card>			
		  </v-flex>
		 </v-layout> -->

		 <!-- <v-layout row wrap>
		  <v-flex xs12>
		  	<v-card-text class="text-xs-center">
		      <h1>{{item_course.subtitle}}</h1>
		    </v-card-text>
		    <v-card-text class="text-xs-center">
		      <h1>{{item_course.title}}</h1>
		    </v-card-text>
		  </v-flex>
		</v-layout> -->
		<v-spacer></v-spacer>
			
		<v-layout row>
		    <v-flex xs12 sm6 offset-sm3>
		      <v-card>
		        <v-card-media
		          :src="item_course.img"
		          height="300px"
		        >
		          <v-layout
		            column
		            fill-height
		          >
		            <v-card-title>
		              <v-btn dark icon @click="nav_courses">
		                <v-icon>chevron_left</v-icon>
		              </v-btn>

		              <!-- <v-spacer></v-spacer>

		              <v-btn dark icon class="mr-3">
		                <v-icon>edit</v-icon>
		              </v-btn>

		              <v-btn dark icon>
		                <v-icon>more_vert</v-icon>
		              </v-btn> -->
		            </v-card-title>


		            <!-- <v-card-title class="black--text pl-5 pt-5">
		              <div class="display-1 pl-5 pt-5">{{item_course.title}}</div>
		            </v-card-title> -->
		          </v-layout>
		        </v-card-media>
		        <v-flex xs12>
		          <v-card-title class="black--text">
		          	<div class="headline"> {{item_course.title}}</div>
            		<span class="grey--text">{{item_course.subtitle}}</span>
		            </v-card-title>
		        </v-flex>

		        <v-list two-line>
		          <v-list-tile v-for="(items_modules, index) in items_courses" :key="index" @click="search_class(items_modules)">
		            <v-list-tile-action>
		              <v-icon color="azul_oscuro">fas fa-sitemap</v-icon>
		            </v-list-tile-action>

		            <v-list-tile-content>
		              <v-list-tile-title>{{items_modules.title}}</v-list-tile-title>
		              <v-list-tile-sub-title>Horario normal: {{items_modules.date_one}}</v-list-tile-sub-title>
		              <v-list-tile-sub-title>Horario intensivo: {{items_modules.date_two}}</v-list-tile-sub-title>
		            </v-list-tile-content>

		            <v-list-tile-action>
		              <v-icon @click="search_class(items_modules)">fas fa-info</v-icon>
		            </v-list-tile-action>
		          </v-list-tile>
		        </v-list>
		      </v-card>
		    </v-flex>
		  </v-layout>

	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let id;
let route;
// let link='http://localhost:3000/images/'
	export default{
		components:{
		},
		mounted(){
			// Download_content.Download_all_tags(title)
			// EventBus.$on(title,data=>{
			// 	// console.log('recibiendo en video',data)
			// 	this.img_nosotros=link+data[0].img
			// })
			EventBus.$on('data-courses',data=>{
				// console.log('recibiendo en cursos view',data)
				this.view=data.view
				id=data.data.id
				this.item_course={
					id:data.data.id,
					title:data.data.title,
					content:data.data.content,
					ico:data.data.ico,
					img:link+data.data.img,
					subtitle:data.data.subtitle
				}
				route=data.route
				Download_content.Download_all_modules_class(data.data.id,data.route,'modules-all')
			})
			EventBus.$on('modules-all',data=>{
				this.items_courses=[]
				// console.log('recibiendo en modulos',data)
				for(let index in data){
					this.items_courses.push({
						id:data[index].id,
						title:data[index].title,
						date_one:data[index].date_one,
						date_two:data[index].date_two,
						img:data[index].img,
						course_id:data[index].course_id,
						items:[
							{title:''}
						]
					})
				}
			})
			// EventBus.$on('class-all',data=>{
			// 	this.items_courses.items=[]
			// 	console.log('recibiendo en clases',data)
			// 	for(let index in data){
			// 		this.items_courses.items.push({
			// 			id:data[index].id,
			// 			title:data[index].title,
			// 			subtitle:data[index].subtitle,
			// 			date_one:data[index].date_one,
			// 			date_two:data[index].date_two,
			// 			img:data[index].img,
			// 			module_id:data[index].module_id,
			// 		})
			// 	}
			// })
		},
		data(){
			return{
				view:false,
				item_course:{
					id:'',
					title:'',
					ico:'',
					img:'',
					content:''
				},
				img_course:'https://www.uci.ac.cr/wp-content/uploads/2017/08/Trabajr-en-equipo-767x357.png',

				items_courses: [
		          	{
			            title: 'Attractions',
			            ico:'',
			            items:[]
		        	}
		        ]
			}
		},
		methods:{
      		search_class(item){
      			Download_content.Download_all_modules_class(item.id,'class/','class-all')
      		},
      		nav_courses(){
      			this.view=false
      			EventBus.$emit('view-list',true)
      		}
		}
	}
</script>