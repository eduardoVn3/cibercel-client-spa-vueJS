<template>
	<!-- <div class="app"> -->
		<div class="text-xs-center">
		    <v-bottom-sheet v-model="sheet">
		      <v-list>
		        <v-subheader>Contacto</v-subheader>
		        <v-list-tile
		          v-for="tile in tiles"
		          :key="tile.title"
		          @click="go_to_social_network_Dialog(tile.path)"
		        >
		          <v-list-tile-avatar>
		            <v-icon>{{tile.ico}}</v-icon>
		          </v-list-tile-avatar>
		          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
		        </v-list-tile>
		      </v-list>
		    </v-bottom-sheet>
		  </div>
	<!-- </div> -->
</template>
<script>
import {EventBus} from '../.././main'
	export default{
		name:'Dialog_contact_information',
		mounted(){
			EventBus.$on('dialog-contact',data=>{
				this.tiles=[]
				this.sheet=data.open
				for(var i=0;i<data.data_social_network.length;i++){
					this.tiles.push(data.data_social_network[i])
				}
				for(var i=0;i<data.data_contact.length;i++){
					this.tiles.push(data.data_contact[i])
				}
			})
		},
		data(){
			return{
				sheet: false,
			      tiles: [],
			}
		},
		methods:{
			go_to_social_network_Dialog(path){
				// alert(path)
				if(path==='Email'){
					EventBus.$emit('openDialog-sendEmail',true)
				}else{
					location.href=path
				}
				this.sheet = false
			}
		}
	}
</script>