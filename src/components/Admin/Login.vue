<template>
	<div class="app">
		<Alert></Alert>
		<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12 mt-5">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Panel admin</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login" ref="form" lazy-validation>
                  <v-text-field 
                  prepend-icon="person" 
                  name="login" 
                  label="nickname" 
                  type="text" 
                  v-model="data_login_admin.nickname"
                  :rules="nicknameRules"></v-text-field>
                  <v-text-field 
                      id="password" 
                      prepend-icon="lock" 
                      name="password" 
                      label="Password" 
                      v-model="data_login_admin.password"
                  	  :rules="passwordRules"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      required
                      ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login" 
                    :loading="valid_data.loading"
                    :disabled="valid_data.loading">
                      Login
                    </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
	</div>
</template>
<script>
import Validate from '.././Javascript/Validate'
import Connection_api from '.././Javascript/Connection_api'
import Alert from '../Templates/Alert'
import {EventBus} from '../../main'
	export default{
		components:{
			Alert:Alert,
		},
		mounted(){
			EventBus.$on('stop-login',data=>{
				this.valid_data.loading=data
			})
			EventBus.$on('send-page',data=>{
				if(data){
					
					this.$router.replace('/Admin/Panel')
				}
			})
		},
		data(){
			return{
				data_login_admin:{
					nickname:'',
					password:''
				},
				nicknameRules:Validate.nicknameRules,
				passwordRules:Validate.passwordRules,
				e1: true,
				valid_data:{
		        valid:false,
		        loading: false
      },
			}
		},
		methods:{
			login(){
				if (this.$refs.form.validate()){
					this.valid_data.loading=true
					Connection_api.Login(this.data_login_admin);
				}else{
					// alert('campo invalido')
				}
			}
		}
	}
</script>