<template>
	<v-layout row justify-center>
    <v-dialog v-model="dialog_add_module" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Seccion {{view_title_option}}</span>
          <v-btn color="error" v-if="view_edit_btn_delete" @click="delete_item">Borrar {{view_title_option}}</v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="titulo" required v-model="data_inputs.title"></v-text-field>
              </v-flex>
              
              <v-flex xs12 v-if="options_disable">
                <v-textarea label="subtitlo" required v-model="subtitle"></v-textarea>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="fecha 1" required v-model="data_inputs.date_one"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="fecha 2" required v-model="data_inputs.date_two"></v-text-field>
              </v-flex>

              <v-flex xs12 v-if="options_disable">
                <v-text-field label="cantidad" required v-model="quantity"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <img :src="'http://cibercel.com/api/public/images/'+img_view" class="grey lighten-1 white--text" style="width: 100%;"></img>
              </v-flex>

              <v-flex xs12>
                <input type="file" name="img" required @change="img_detected">
              </v-flex>

            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close_dialog">Cerrar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="add_module">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import {EventBus} from '../../main'
import Connection_api from '../Javascript/Connection_api'
let route;
let course_id;
	export default{
		mounted(){
			EventBus.$on('dialog-add_module',data=>{
				// console.log('data de dialog add modules:',data)
				this.options_disable=false
				course_id=data.course_id
				this.view_edit_btn_delete=false
				this.dialog_add_module=data.view
				route=data.route
				if(data.route==='class/'){
					this.id_item=data.data.id
					this.view_title_option='Clase'
					this.options_disable=true
				}else{
					this.view_title_option='Modulo'
				}
			})
			EventBus.$on('edit-items_modules_class',data=>{
				route=data.route
				if(data.route=='class/'){
					// console.log('data del edit class',data.data)
					this.dialog_add_module=data.view
					this.data_inputs={
						id:data.data.id,
						title:data.data.title,
						date_one:data.data.date_one,
						date_two:data.data.date_two,
					}
					this.img_view=data.data.img
					this.subtitle=data.data.subtitle
					this.quantity=data.data.quantity
					this.view_edit_btn_delete=true
					this.view_title_option='Clase'
					this.options_disable=true
				}else{
					// console.log('data del edit module',data.data)
					this.dialog_add_module=data.view
					this.data_inputs={
						id:data.data.id,
						title:data.data.title,
						date_one:data.data.date_one,
						date_two:data.data.date_two,
					}
					this.img_view=data.data.img
					this.img=data.data.img
					this.options_disable=false
					this.view_edit_btn_delete=true
					this.view_title_option='Modulo'
				}
			})
		},
		data(){
			return{
				dialog_add_module: false,
				id_item:null,
				view_title_option:'',
				view_edit_btn_delete:false,
				options_disable:false,
				data_inputs:{
					title:'',
					date_one:'',
					date_two:'',
				},
				subtitle:'',
				quantity:1,
				img:'',
				img_view:''
			}
		},
		methods:{
			add_module(){
				if(route==='class/'){
					// alert(this.id_item)
					if(this.view_edit_btn_delete){
						// alert('update')
						Connection_api.Update_data_class(this.data_inputs,this.subtitle,this.quantity,this.img,route)
					}else{
						Connection_api.Add_data_class(this.data_inputs,this.subtitle,this.quantity,this.img,this.id_item,route)
					}
				}else{
					if(this.view_edit_btn_delete){
						// alert('update')
						// alert(route)
						Connection_api.Update_data_module(this.data_inputs,this.img,route)
					}else{
						Connection_api.Add_data_module(this.data_inputs,this.img,route,course_id)
					}
					
				}
				this.data_inputs=[]
				this.subtitle=''
				this.quantity=1
				this.img=''
				this.img_view=''
				this.view_edit_btn_delete=false
				this.dialog_add_module=false
			},
			img_detected(e){
	        	this.img = e.target.files[0];
	        },
	        close_dialog(){
	        	this.data_inputs=[]
				this.subtitle=''
				this.quantity=1
				// this.img=''
				this.img_view=''
				this.view_edit_btn_delete=false
				this.options_disable=false
				this.dialog_add_module=false
	        },
	        delete_item(){
	        	Connection_api.Delete_items_module_and_clas(this.data_inputs.id,route)
	        	this.close_dialog()
	        }
		}
	}
</script>