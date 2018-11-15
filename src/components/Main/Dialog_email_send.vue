<template>
	<v-layout row justify-center>
    <v-dialog v-model="dialog_send_email" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Contactanos</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
          	<v-form ref="form" v-model="valid" lazy-validation>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field
                v-model="data_form_user.name"
                :rules="validate_name"
		        label="Nombre"
		        required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
	            v-model="data_form_user.email"
		        :rules="validate_email"
		        label="E-mail"
		        required
	          ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-textarea style="resize: none;"
		          solo
		          v-model="data_form_user.commentary"
		          name="input-7-4"
		          label="Dejanos tu comentario!!!"
		        ></v-textarea>
              </v-flex>
              </v-flex>
              
            </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="negro" flat @click="close_data_form_clear">Cerrar</v-btn>
          <v-btn color="azul_claro" flat @click="send_data_form">Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Validate from '.././Javascript/Validate'
import Connection_api from '.././Javascript/Connection_api'
	export default{
		name:'Dialog_email_send',
		mounted(){
			EventBus.$on('openDialog-sendEmail',data=>{
				this.dialog_send_email=data
			})
		},
		data(){
			return{
				dialog_send_email: false,
				validate_name:Validate.nameRules,
				validate_email:Validate.emailRules,
				data_form_user:{
					name:'',
					email:'',
					commentary:''
				},
				valid:true,
			}
		},
		methods:{
			send_data_form(){
				// console.log(this.data_form_user)
				if(this.$refs.form.validate()){
					Connection_api.Send_email(this.data_form_user)
					this.dialog_send_email=false
					this.data_form_user={}
				}
			},
			close_data_form_clear(){
				this.dialog_send_email=false
				this.data_form_user={
					name:'',
					email:'',
					commentary:''
				}
			}
		}
	}
</script>