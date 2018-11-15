<template>
	<v-layout row wrap>
	  <v-flex xs12>
	    <v-snackbar
	      v-model="alert_data.snackbar"
	      :color="alert_data.color"
	      top
	      right
	      multi-line
	      :timeout="alert_data.time"
	      vertical
	    >
	      {{ alert_data.text }}
	      <v-btn
	        dark
	        flat
	        @click="alert_data.snackbar = false"
	      >
	        Cerrar
	      </v-btn>
	    </v-snackbar>
	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../../main'
	export default{
		name:'Alert',
		mounted(){
			EventBus.$on('alert-message',data=>{
				this.alert_data={
					text:data.text,
					color:data.color,
					ico:data.ico,
					time:data.time,
					snackbar:data.snackbar
				}
			})
		},
		data(){
			return{
				alert_data:{
					text:'',
					color:'',
					ico:'',
					time:2000,
					snackbar:false
				}
			}
		}
	}
</script>