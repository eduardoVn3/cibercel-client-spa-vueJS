<template>
	<!-- <v-layout row wrap> -->
	  <v-flex xs12 sm12 md3 lg3 SG3>
	     <v-card>
	        <v-toolbar color="primary" dark>
	          <v-toolbar-title>Lista de tags</v-toolbar-title>
	          <v-spacer></v-spacer>
	        </v-toolbar>

	        <v-list>
	          <template v-for="(item_tag, index) in items_tags">
	            <v-list-tile
	              v-if="item_tag.action"
	              :key="item_tag.title"
	              @click="go_to_upload_tag(item_tag)"
	            >
	              <v-list-tile-action>
	                <v-icon>{{ item_tag.action }}</v-icon>
	              </v-list-tile-action>

	              <v-list-tile-content>
	                <v-list-tile-title>{{ item_tag.title }}</v-list-tile-title>
	              </v-list-tile-content>
	            </v-list-tile>
	          </template>
	        </v-list>
	      </v-card>
	  </v-flex>
	<!-- </v-layout> -->
</template>
<script>
import {EventBus} from '../../main'
import Connection_api from '../Javascript/Connection_api'
let course='cursos'
// let course='cursos'
	export default{
		mounted(){
			Connection_api.Get_all_tags()
			EventBus.$on('send-tags',data=>{
				for(let index in data){
					this.items_tags.push({id:data[index].id,action:'fas fa-tag',title:data[index].title})
				}
			})
		},
		data(){
			return{
				items_tags: [],
			}
		},
		methods:{
			go_to_upload_tag(item){
				if(item.title.toUpperCase()===course.toUpperCase()){
					// alert('son los cursos')
					EventBus.$emit('render-view_data_base',{data_id:item.id,route:'courses/'})
				}else{
					// alert(item.title)
					EventBus.$emit('render-view_data_base',{data_id:item.id,route:'properties/'})
				}
				// EventBus.$emit('agg-tags',title)
			}
		}
	}
</script>