<template>
	<v-layout row justify-center>
    <v-dialog v-model="dialog_class" width="600px">
      <v-card>
        <v-card-title>
        	<v-btn flat icon @click="dialog_class = false"><v-icon>close</v-icon></v-btn>
          <span class="headline">Lista de clases</span>
        </v-card-title>
        <v-divider></v-divider>
        <!-- <v-card-text v-for="(items_class_for,index) in items_class">
			{{items_class_for.title}}
        </v-card-text> -->
        <v-card-text>
         	<v-flex xs12 v-for="(items,index) in items_class" :key="index">
	            <v-card color="white" class="black--text">
	              <v-layout row>
	                <v-flex xs7>
	                  <v-card-title primary-title>
	                    <v-card-text>
	                      <div class="headline">{{items.title}}</div>
	                      <div>{{items.subtitle}}</div>
	                      <div>Inicia: {{items.date_one}}</div>
	                      <div>Finaliza: {{items.date_two}}</div>
	                    </v-card-text>
	                  </v-card-title>
	                </v-flex>
	                <v-flex xs5>
	                  <v-card-media
	                    :src="items.img"
	                    height="100%"
	                    contain
	                  ></v-card-media>
	                </v-flex>
	              </v-layout>
	              <v-divider light></v-divider>
	              <!-- <v-card-actions class="pa-3">
	                Rate this album
	                <v-spacer></v-spacer>
	                <v-icon>star_border</v-icon>
	                <v-icon>star_border</v-icon>
	                <v-icon>star_border</v-icon>
	                <v-icon>star_border</v-icon>
	                <v-icon>star_border</v-icon>
	              </v-card-actions> -->
	            </v-card>
	          </v-flex> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="dialog_class = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import link from '../../Config/Link'
// let link='http://localhost:3000/images/'
	export default{
		name:'Dialog_class',
		mounted(){
			EventBus.$on('class-all',data=>{
				this.dialog_class=true
				this.items_class=[]
				// console.log('recibiendo en clases',data)
				for(let index in data){
					this.items_class.push({
						id:data[index].id,
						title:data[index].title,
						subtitle:data[index].subtitle,
						date_one:data[index].date_one,
						date_two:data[index].date_two,
						img:link+data[index].img,
						module_id:data[index].module_id,
					})
				}
				// console.log(this.items_class)
			})
		},
		data(){
			return{
				dialog_class:false,
				items_class:[]
			}
		}
	}
</script>