<template>
	<div class="app" v-if="view_list_modules">
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
		      Modulos
		    </v-card-text>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>
		<v-layout align-center justify-center row wrap fill-height>
		  <v-flex xs10 sm10 md5 lg5 SG5 class="mt-5 list_modules_hover" v-for="(items_modules,index) in list_modules" :key="index">
		  	<a @click="list_class(items_modules)">
			  	<v-card>
			        <v-card-media
			          :src="items_modules.img"
			          height="200px"
			        ></v-card-media>

			        <v-card-title primary-title>
			          <div>
			            <h3 class="headline mb-0 text-xs-center">{{items_modules.title}}</h3>
			            <span class="grey--text">Horario normal (Lunes a Viernes): {{items_modules.date_one}}</span>
			            <br>
			            <span class="grey--text">Horario intensivo (Sabado y Domingo): {{items_modules.date_two}}</span>
			            <!-- <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div> -->
			          </div>
			        </v-card-title>
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
let route;
	export default{
		components:{
		},
		mounted(){
			EventBus.$on('view-list_modules2',data=>{
				this.view_list_modules=data
			})
			EventBus.$on('course-data',data=>{
				// console.log('course-data',data)
				this.view_list_modules=data.view
				route=data.route
				Download_content.Download_all_modules_class(data.data.id,data.route,'module-data')
			})
			EventBus.$on('access_nav',data=>{
				// console.log('access_nav',data)
				this.view_list_modules=data.view
				route=data.route
				Download_content.Download_all_modules_class(data.data.id,data.route,'module-data')
			})
			EventBus.$on('module-data',data=>{
				this.list_modules=[]
				 // console.log('modulos',data)
				 for(let index in data){
				 	this.list_modules.push({
					 	id:data[index].id,
					 	title:data[index].title,
					 	date_one:data[index].date_one,
					 	date_two:data[index].date_two,
					 	img:link+data[index].img,
					 	course_id:data[index].course_id
				 	})
				 }
			})
		},
		data(){
			return{
				view_list_modules:false,
				list_modules:[]
			}
		},
		methods:{
			back(){
				EventBus.$emit('view-list_modules',true)
				this.view_list_modules=false
			},
			list_class(item){
				EventBus.$emit('module-data_item_view',{data:item,view:true,route:'class/'})
				this.view_list_modules=false
			}
		}
	}
</script>
<style>
	.list_modules_hover{
		-webkit-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
		-moz-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
		box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
	}
	.list_modules_hover:hover{
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