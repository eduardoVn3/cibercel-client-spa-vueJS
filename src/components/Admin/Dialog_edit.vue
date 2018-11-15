<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog_edit" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Agregar item</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Titulo" required v-model="data_inputs.title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="subtitlo" required v-model="data_inputs.subtitle"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Contenido" required v-model="data_inputs.content"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="icono" required v-model="data_inputs.ico"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <img :src="img_view" class="grey lighten-1 white--text" style="width: 100%;"></img>
              </v-flex>
              <v-flex xs12>
                <input type="file" name="" required @change="img_detected">
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_edit = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save_edit_data">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import {EventBus} from '../../main'
import Connection_api from '../Javascript/Connection_api'
import axios from 'axios'
import link from '../../Config/Link'
let data_item;
let new_data;
let tag_id;
  export default{
    mounted(){
      EventBus.$on('dialog-edit',data=>{
        // console.log('la ruta llega:',data)
        data_item=data.data
        new_data=data.data_new
        tag_id=data.tag_id
        this.img_view=link+data.data.img
        this.dialog_edit=data.view
        this.route=data.route
        this.data_inputs={
          title:data.data.title,
          content:data.data.content,
          img:data.data.img,
          ico:data.data.ico
        }
      })
      EventBus.$on('dialog-edit_success',data=>{
        this.dialog_edit=data
        // this.image=''
      })
    },
    data(){
      return{
        route:null,
        dialog_edit: false,
        quantity:0,
        data_inputs:{
          title:'',
          subtitle:'',
          content:'',
          ico:''
        },
        image:'',
        img_view:'',
      }
    },
    methods:{
      img_detected(e){
        this.image = e.target.files[0];
      },
      save_edit_data(){
        if(new_data){
          // alert('agregar')
          Connection_api.Store_Data_post_properties(this.data_inputs,this.image,this.route,tag_id)
        }else{
          // alert('update')
          Connection_api.Update_Data_post_properties(this.data_inputs,this.image,data_item,this.route)
        }
      },
    }
  }
</script>