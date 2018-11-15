<template>
	<div class="app">
		<v-divider></v-divider>
		<v-layout row wrap>
		  <v-flex xs12>
		  	<v-card color="azul_claro">
		  	  <v-card-text class="text-xs-center title blanco--text">
		    	Informate de nuestros cursos
		    </v-card-text>
		  	</v-card>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>
		<v-layout row wrap>
			<!-- nosotros -->
		  <v-flex xs12 sm12 md12 lg3 SG3>
		    <v-card-text class="text-xs-center">
		      <div class="subheading">
		      	{{text_content_nosotros.title}}
		      </div>
		      <p class="text-ls-center mt-5" >{{text_content_nosotros.text}}</p>
		    </v-card-text>
		  </v-flex>
		  <v-divider></v-divider>
		<!-- fin de nosotros -->
		<!-- fin de informacion -->
		  <v-flex xs12 sm12 md12 lg3 SG3>
		    <v-card-text class="text-xs-center">
		      <div class="subheading">
		      	{{text_content_informacion.title}}
		      </div>
				<p class="text-ls-center mt-5">{{text_content_informacion.text}}</p>
		    </v-card-text>
		  </v-flex>
		  <!-- fin de informacion -->
		  <!-- mapa -->
		  <v-flex xs12 sm12 md12 lg3 SG3>
		    <v-card-text class="text-xs-center">
		      <div class="subheading">
		      	{{text_content_ubicanos.title}}
		      </div>
		    </v-card-text>
		    <iframe :src="text_content_ubicanos.text" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
		  </v-flex>
		  <!-- fin de mapa -->
		  <!-- formulario -->
		  <v-flex xs12 sm12 md12 lg3 SG3>
		    <v-card-text class="text-xs-center">
		      <div class="subheading">
		      	Contactanos
		      </div>
		    </v-card-text>
		   
		    	<v-container>
		    	  <v-layout align-center justify-center row fill-height>
		    	    <v-flex xs12 sm12>
		    	    	<v-form @submit.prevent="send_email" v-model="valid" ref="form" lazy-validation>
		    	    	<v-text-field 
		    	    	label="nombre" 
		    	    	v-model="input_message.name"
		    	    	:rules="validate_name"
		    	    	required
		    	    	>
		    	    		
		    	    	</v-text-field>
		    	      <v-text-field
            			label="Email"
            			v-model="input_message.email"
            			:rules="validate_email"
            			required
          			 ></v-text-field>
          			 <v-textarea style="resize: none;"
				          solo
				          name="input-7-4"
				          label="Dejanos tu comentario!!!"
				          v-model="input_message.commentary"
				        ></v-textarea>
				        </v-form>
          			 <v-btn color="success" @click="send_email" justify-center>Suscribirse</v-btn>
		    	    </v-flex>
		    	  </v-layout>
		    	</v-container>	
		    
		  </v-flex>
		  <!-- fin de formulario -->
		</v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import Connection_api from '.././Javascript/Connection_api'
import link from '../../Config/Link'
import Validate from '.././Javascript/Validate'
let title='nosotos_sobre_nosotros'
let title2='nosotros_ofrecemos'
let title3='Contacto_mapa'
// let link='http://localhost:3000/images/'
	export default{
		name:'Course_information',
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en sobre nosotros informacion',data)
				this.text_content_nosotros={
					title:data[0].title,
					text:data[0].content
				}
			})

			Download_content.Download_all_tags(title2)
			EventBus.$on(title2,data=>{
				// console.log('recibiendo en sobre nosotros informacion',data)
				this.text_content_informacion={
					title:data[0].title,
					text:data[0].content
				}
			})

			Download_content.Download_all_tags(title3)
			EventBus.$on(title3,data=>{
				// console.log('recibiendo en sobre nosotros informacion',data)
				this.text_content_ubicanos={
					title:data[0].title,
					text:data[0].content
				}
			})
		},
		data(){
			return{
				text_content_nosotros:{title:'',text:''},
				text_content_informacion:{title:'',text:''},
				text_content_ubicanos:{title:'',text:''},
				validate_name:Validate.nameRules,
				validate_email:Validate.emailRules,
				input_message:{
					name:'',
					email:'',
					commentary:'',
				},
				valid:true,
			}
		},
		methods:{
			send_email(){
				if(this.$refs.form.validate()){
					Connection_api.Send_email(this.input_message)
				}else{
					// alert('Los campos son obligatorios')
				}
			}
		}
	}
</script>