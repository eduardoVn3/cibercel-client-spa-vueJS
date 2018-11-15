<template>
	<!-- <v-layout row wrap> -->
	  <v-flex xs12 sm12 md9 lg9 SG9>
	    <v-card>
	        <v-toolbar color="light-blue" dark>

	          <v-toolbar-title>Resultados</v-toolbar-title>

	          <v-spacer></v-spacer>
	          <v-btn flat @click="add_data_base" v-if="button_add_view">
	            <v-icon>fas fa-plus-circle</v-icon>
	          </v-btn>
	        </v-toolbar>
	        <v-list two-line subheader v-if="data_base_items!=''">

	          <v-list-tile
	            v-for="item in data_base_items"
	            :key="item.id"
	            avatar
	            @click=""
	          >
	            <v-list-tile-avatar>
	              <img :src="'http://cibercel.com/api/public/images/'+item.img" class="grey lighten-1 white--text"></img>
	            </v-list-tile-avatar>

	            <v-list-tile-content>
	              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
	              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
	            </v-list-tile-content>

	            <v-list-tile-action>
	            	<v-layout row wrap>
	            	  <v-flex xs4>
	            	    <v-btn icon ripple @click="delete_item(item)">
			                <v-icon color="grey lighten-1">fas fa-trash-alt</v-icon>
			            </v-btn>
			            <div class="mr-5 ml-5 hidden-xs-only"></div>
	            	  </v-flex>
	            	  <v-flex xs4>
		            	<v-btn icon ripple  @click="edit_item(item)">
				            <v-icon color="grey lighten-1">fas fa-edit</v-icon>
				        </v-btn>
	            	  </v-flex>
	            	  <v-flex xs4 v-if="course_view">
		            	<v-btn icon ripple  @click="detail_item(item)">
				            <v-icon color="grey lighten-1">fas fa-info</v-icon>
				        </v-btn>
	            	  </v-flex>
	            	</v-layout>
	            </v-list-tile-action>
	          </v-list-tile>
	        </v-list>
			
			<v-card-text text-xs-center v-else="">
				Vacio
			</v-card-text>
			<v-layout row wrap v-if="button_add_view">
		          <v-flex xs12>
		            <v-btn color="success"@click="add_data_base">
			            Agregar
			            <v-icon class="ml-2">fas fa-plus-circle</v-icon>
			        </v-btn>
		          </v-flex>
		        </v-layout>
	      </v-card>
	  </v-flex>
	<!-- </v-layout> -->
</template>
<script>
import {EventBus} from '../../main'
import Connection_api from '../Javascript/Connection_api'
let tag_id;
	export default{
		mounted(){
			EventBus.$on('render-view_data_base',data=>{
				Connection_api.Download_items_database(data.route,data.data_id)
				tag_id=data.data_id
				this.route=data.route
				this.button_add_view=true
				if(this.route==='courses/'){
					this.course_view=true
				}else{
					this.course_view=false
				}
			})
			EventBus.$on('data-data_base',data=>{
				this.data_base_items=data
				// console.log(this.data_base_items)
			})
		},
		data(){
			return{
				route:null,
				data_base_items:[],
				button_add_view:false,
				course_view:false,
			}
		},
		methods:{
			add_data_base(){
				// alert('agregar')
				let item={
					title:'',
          			content:'',
          			ico:''
				}
				EventBus.$emit('dialog-edit',{data:item,view:true,route:this.route,data_new:true,tag_id:tag_id})
			},
			edit_item(item){
				EventBus.$emit('dialog-edit',{data:item,view:true,route:this.route,data_new:false})
			},
			delete_item(item){
				// console.log('el item delete es',item)
				Connection_api.Delete_data_base_item(item.id,this.route);
			},
			detail_item(item){
				EventBus.$emit('dialog-details',{data:item,view:true,route:this.route})
			}
		}
	}
</script>