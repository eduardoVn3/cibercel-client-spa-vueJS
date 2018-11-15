<template>
	<v-layout row wrap>
	  <v-flex xs12>
		<v-tabs
		    dark
		    color="cyan"
		    show-arrows
		  >
		    <v-tabs-slider color="yellow"></v-tabs-slider>

		    <v-tab
		      v-for="(items_modules,i) in items_courses_modules"
		      :href="'#tab-' + i"
		      :key="i"
		      @click="search_class(items_modules)"
		    >
		      {{items_modules.title}}
		    </v-tab>

		    <v-tabs-items>
		      <v-tab-item
		        v-for="(items_modules_2,i) in items_courses_modules"
		        :id="'tab-' + i"
		        :key="i"
		      >
		        <v-card flat v-for="(items_class,index) in items_modules_2.items" :key="index">
		          <v-card-text>{{ items_class.title }}</v-card-text>
		        </v-card>
		      </v-tab-item>
		    </v-tabs-items>
		  </v-tabs>
	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
	export default{
		mounted(){
			// EventBus.$on('modules-all',data=>{
			// 	// this.items_courses_modules=[]
			// 	console.log('recibiendo en modulos',data)
			// 	for(let index in data){
			// 		this.items_courses_modules.push({
			// 			id:data[index].id,
			// 			title:data[index].title,
			// 			date_one:data[index].date_one,
			// 			date_two:data[index].date_two,
			// 			img:data[index].img,
			// 			course_id:data[index].course_id,
			// 			items:[
			// 			]
			// 		})
			// 	}
			// })

			// // //class
			// EventBus.$on('class-all',data=>{
			// 	this.items_courses_modules.items=[]
			// 	console.log('recibiendo en clases',data)
			// 	for(let index in data){
			// 		this.items_courses_modules.items.push({
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
				 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				 items_courses_modules: [
		          	{
			            title: 'Horario',
			            ico:'',
			            items:[
			            	{title:'2134'},
			            	{title:'456546'},
			            ]
		        	}
		        ],
			}
		},
		methods:{
			search_class(item){
      			alert('abrir')
      			Download_content.Download_all_modules_class(item.id,'class/','class-all')
      		},
		}
	}
</script>