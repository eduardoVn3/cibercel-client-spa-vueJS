<template>
	<div class="app">
		<div class="true" v-if="auth">
			<Alert></Alert>
			<Nav-title></Nav-title>
			<v-layout row wrap>
				<List-tags></List-tags>
			 	<Panel-view></Panel-view> 
			</v-layout>
			<Dialog-edit></Dialog-edit>
			<Dialog-details></Dialog-details>
			<Dialog-module></Dialog-module>
		</div>
		<div class="false" v-else="">
			<v-card-text text-xs-center>
			  <h1>No ha iniciado sesion!</h1>
			  <h5>No tienes autorizacion a entrar a esta pagina</h5>
			  <v-btn color="success" @click="back">Inciar sesion</v-btn>
			</v-card-text>
		</div>
	</div>
</template>
<script>
import Alert from '../Templates/Alert'
import List_tags from './List_tags'
import Panel_view from './Panel_view'
import Dialog_edit from './Dialog_edit'
import Dialog_details from './Dialog_details'
import Dialog_edit_add_module from './Dialog_edit_add_module'
import Nav_title from './Nav_title'
import Login from './Login'
	export default{
		name:'Admin',
		components:{
			'Alert':Alert,
			'List-tags':List_tags,
			'Panel-view':Panel_view,
			'Dialog-edit':Dialog_edit,
			'Dialog-details':Dialog_details,
			'Dialog-module':Dialog_edit_add_module,
			'Nav-title':Nav_title,
			'Login':Login,
		},
		mounted(){
			let validate=window.localStorage.getItem('cibercel_storage_login');
			if(validate){
				this.auth=validate
			}
			// setTimeout(function() {
			// 	alert('termino el tiempo')
			// 	this.auth=false
			// 	this.$router.replace('/admin/login')
			// 	window.localStorage.removeItem('cibercel_storage_login');
			// }, 2000);
		},
		data(){
			return{
				auth:false,
			}
		},
		methods:{
			back(){
				this.$router.replace('/admin/login')
			}
		}
	}
</script>