<template>
	<v-layout row justify-center>
    	<v-dialog v-model="dialog_detail" persistent width="600px">
        	<v-layout row>
			    <v-flex xs12>
			      <v-card>
			        <v-toolbar color="teal" dark>
			          <v-btn icon @click="close_list_modules"><v-icon>fas fa-times</v-icon></v-btn>

			          <v-toolbar-title>Modulos y clases</v-toolbar-title>

			          <v-spacer></v-spacer>
			          <v-btn icon @click="add_module"><v-icon>{{ico_module}}</v-icon></v-btn>
			          <v-btn icon @click="add_class(data_module)" v-if="module_select"><v-icon>{{ico_class}}</v-icon></v-btn>
			        </v-toolbar>
					<!-- :prepend-icon="ico_module" -->
			        <v-list>
			          <v-list-group
			            v-for="(item,index) in items_detail_modules_class"
			            :key="item.id"
						:prepend-icon="ico_module"
			            no-action
			          >
			            <v-list-tile slot="activator" @click="download_class(item,index)">
			              <v-list-tile-content>
			                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
			              </v-list-tile-content>
			              <v-flex xs1 class="mr-3">
			            	<v-btn icon ripple  @click="edit_item(item,'modules/')">
					            <v-icon color="grey lighten-1">fas fa-edit</v-icon>
					        </v-btn>
		            	  </v-flex>
			            </v-list-tile>

			            <v-list-tile
			              v-for="subItem in item.items"
			              :key="subItem.title"
			              @click=""
			            >
			            <v-icon class="mr-2">{{ico_class}}</v-icon>
			              <v-list-tile-content>
			                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
			              </v-list-tile-content>
							<v-flex xs1>
			            	<v-btn icon ripple  @click="edit_item(subItem,'class/')">
					            <v-icon color="grey lighten-1">fas fa-edit</v-icon>
					        </v-btn>
		            	  </v-flex>
			              <v-list-tile-action>
			                <v-icon>{{ subItem.action }}</v-icon>
			              </v-list-tile-action>
			            </v-list-tile>
			          </v-list-group>
			        </v-list>
			      </v-card>
			    </v-flex>
		  </v-layout>
    </v-dialog>
  </v-layout>
</template>
<script>
import {EventBus} from '../../main'
import Connection_api from '../Javascript/Connection_api'
let course_id;
let index_item;
let module_id;
	export default{
		mounted(){
			EventBus.$on('dialog-details',data=>{
				this.items_detail_modules_class=[]
				// console.log(data)
				course_id=data.data.id
				Connection_api.Get_all_modules(course_id);
				this.dialog_detail=data.view
			})
			EventBus.$on('send-modules',data=>{
				// console.log('data de modulos:',data)
				for(let index in data.data){
					this.items_detail_modules_class.push({
						id:data.data[index].id,
						title:data.data[index].title,
						date_one:data.data[index].date_one,
						date_two:data.data[index].date_two,
						img:data.data[index].img,
						course_id:data.data[index].course_id,
						items:[
							{title:''},
							// {title:'esta es 2 clase'},
						]
					})
				}
			})
			EventBus.$on('send-class',data=>{
				// console.log('data de class:',data)
				this.items_detail_modules_class[index_item].items=[]
				for(let index in data.data){
					this.items_detail_modules_class[index_item].items.push({
						id:data.data[index].id,
						title:data.data[index].title,
						subtitle:data.data[index].subtitle,
						quantity:data.data[index].quantity,
						date_one:data.data[index].date_one,
						date_two:data.data[index].date_two,
						img:data.data[index].img,
						module_id:data.data[index].module_id,
					})
				}
			})
		},
		data(){
			return{
				ico_module:'fas fa-list-ul',
				ico_class:'fas fa-book',
				dialog_detail: false,
				module_select:false,
				data_module:null,
				items_detail_modules_class: [
		          {
		            action: 'local_activity',
		            title: 'Attractions',
		            items: [
		              { title: 'List Item' }
		            ]
		          },
		        ],
			}
		},
		methods:{
			download_class(item,index){
				this.data_module=item
				index_item=index
				Connection_api.Get_all_class(item.id)
				this.module_select=true
			},
			close_list_modules(){
				this.items_detail_modules_class=[]
				this.dialog_detail=false
				this.module_select=false
			},
			add_module(){
				// alert('creando modulo')
				EventBus.$emit('dialog-add_module',{data:'',view:true,route:'modules/',course_id:course_id})
			},
			add_class(item){
				// alert('creando class')
				EventBus.$emit('dialog-add_module',{data:item,view:true,route:'class/',module_id:this.data_module.id})
			},
			edit_item(item,route){
				EventBus.$emit('edit-items_modules_class',{data:item,route:route,view:true})
			}
		}
	}
</script>