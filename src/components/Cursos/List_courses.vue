<template>
	<div class="app" v-show="view_course_var">
		<Nav-back></Nav-back>
		<v-divider></v-divider>
		<v-layout align-center justify-center row wrap fill-height class="mt-1">
	  <v-flex xs10 sm10 md5 lg5 SG5 v-for="(items_courses,index) in  list_courses" :key="index"
	  class="mt-3 ml-3"
		  >
		  	<a @click="view_course(items_courses)">
			    <v-card class="list_courses_hover">
			        <v-card-media
			          :src="items_courses.img"
			          height="200px"
			        >
			        </v-card-media>

			        <v-card-title primary-title>
			          <div>
			            <div class="headline ml-4">{{items_courses.title}}</div>
			            <span class="grey--text ml-4">{{items_courses.subtitle}}</span>
			          </div>
			        </v-card-title>

			        <!-- <v-card-actions>
			          <v-spacer></v-spacer>
			          <v-btn icon @click="items_courses.view=!items_courses.view">
			            <v-icon>{{ !items_courses.view ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
			          </v-btn>
			        </v-card-actions> -->

			        <v-slide-y-transition>
			        	<div v-show="items_courses.view">
			        	  	<v-card-text class="text-xs-center">
			        	  		Objetivo del curso:
			        		</v-card-text>
			        		<v-card-text v-show="items_courses.view" class="text-xs-center">
			           			{{items_courses.content}}
			          		</v-card-text>
			        	</div>
			        </v-slide-y-transition>
			      </v-card>
		      </a>
		  </v-flex>
		</v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
import Nav_back from './Nav_back'
	export default{
		components:{
			'Nav-back':Nav_back,
		},
		mounted(){
			EventBus.$on('view-list_modules',data=>{
				this.view_course_var=data
			})
			EventBus.$on('access_nav',data=>{
				this.view_course_var=true
			})
			Download_content.Download_all_courses()
			EventBus.$on('courses-all',data=>{
				this.list_courses=[]
				this.show=[]
				// console.log('recibiendo en video',data)
				for(let index in data){
					this.list_courses.push({
						id:data[index].id,
						title:data[index].title,
						subtitle:data[index].subtitle,
						content:data[index].content,
						ico:data[index].ico,
						img:link+data[index].img,
						view:true
					})
				}
			})
		},
		data(){
			return{
				view_course_var:true,
				show:false,
				list_courses:[]
			}
		},
		methods:{
			view_course(item){
				EventBus.$emit('course-data',{data:item,view:true,route:'modules/'})
				this.view_course_var=false
			}
		}
	}
</script>
<style>
	.list_courses_hover{
		-webkit-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
		-moz-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
		box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
	}
	.list_courses_hover:hover{
		-webkit-transform:scale(1.1);
		-moz-transform:scale(1.1);
		-ms-transform:scale(1.1);
		-o-transform:scale(1.1);
		transform:scale(1.1);
		z-index: 9999;
		-webkit-transition:all .9s ease; /* Safari y Chrome */
		-moz-transition:all .9s ease; /* Firefox */
		-o-transition:all .9s ease; /* IE 9 */
		-ms-transition:all .9s ease; /* Opera */

		-webkit-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.75);
		-moz-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.75);
		box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.75);
	}
</style>