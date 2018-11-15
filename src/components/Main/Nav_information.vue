<template>
		<v-layout row wrap style="height: 45px;">
		  <v-flex xs12>
		    <v-toolbar
    			color="azul_claro"
  			>
  			<!-- class="hidden-xs-only hidden-sm-only hidden-md-only" -->
  				<v-toolbar-items>
  					<v-btn flat v-for="(items_social_networks_nav_information,index) in social_networks_nav_information"
  					:key="items_social_networks_nav_information.id"
  					@click="go_to_social_newtwork(items_social_networks_nav_information.path)"
  					style="height: 45px;"
  					class="hidden-xs-only hidden-sm-only hidden-md-only blanco--text button_zumb"
  					
  					>
  						<v-icon>{{items_social_networks_nav_information.ico}}</v-icon>
  					</v-btn>
  					<!-- para movil -->
  					<v-btn icon v-for="(items_social_networks_nav_information,index) in social_networks_nav_information"
  					:key="items_social_networks_nav_information.title"
  					@click="go_to_social_newtwork(items_social_networks_nav_information.path)"
  					style="height: 45px;"
  					class="hidden-lg-only hidden-xl-only blanco--text"
  					
  					>
  						<v-icon>{{items_social_networks_nav_information.ico}}</v-icon>
  					</v-btn>
  				</v-toolbar-items>
  				<v-spacer></v-spacer>

  				<v-toolbar-items>
  					<v-btn flat style="height: 45px;" @click="open_dialog_contact" class="hidden-lg-only hidden-xl-only blanco--text"><v-icon>more_vert</v-icon></v-btn>
  					<v-btn flat v-for="(items_contact_nav_information,index) in contact_nav_information"
  					:key="items_contact_nav_information.title"
  					@click="go_to_social_newtwork(items_contact_nav_information.path)"
  					style="height: 45px;"
  					class="hidden-xs-only hidden-sm-only hidden-md-only blanco--text button_zumb"
  					>
  						<v-icon>{{items_contact_nav_information.ico}}</v-icon>
  						<v-card-text>
  						  {{items_contact_nav_information.title}}
  						</v-card-text>
  					</v-btn>
  				</v-toolbar-items>
  			</v-toolbar>
		  </v-flex>
		</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='redes_sociales_facebook'
let title2='redes_sociales_youtube'
let title3='redes_sociales_instagram'
let title4='Contacto_whatsappp'
let title5='Contacto_email'	
let title6='Contacto_telefono_fijo'	


// let link='http://localhost:3000/images/'
	export default{
		components:{
		},
		mounted(){
			//face
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				this.social_networks_nav_information=[]
				this.social_networks_nav_information.push({
					id:data[0].id,
					title:data[0].title,
					ico:'fab fa-facebook-f',
					path:data[0].content
				})
			})
			//youtbe
			Download_content.Download_all_tags(title2)
			EventBus.$on(title2,data=>{
				// this.social_networks_nav_information=[]
				this.social_networks_nav_information.push({
					id:data[0].id,
					title:data[0].title,
					ico:'fab fa-youtube',
					path:data[0].content
				})
			})
			//instagram
			Download_content.Download_all_tags(title3)
			EventBus.$on(title3,data=>{
				// this.social_networks_nav_information=[]
				this.social_networks_nav_information.push({
					id:data[0].id,
					title:data[0].title,
					ico:'fab fa-instagram',
					path:data[0].content
				})
			})
			//whatsapp
			Download_content.Download_all_tags(title4)
			EventBus.$on(title4,data=>{
				this.contact_nav_information=[]
				this.contact_nav_information.push({
					id:data[0].id,
					title:data[0].title,
					ico:'fab fa-whatsapp',
					path:data[0].content
				})
			})

			Download_content.Download_all_tags(title6)
			EventBus.$on(title6,data=>{
				// this.contact_nav_information=[]
				this.contact_nav_information.push({
					id:data[0].id,
					title:data[0].content,
					ico:'fas fa-phone-volume',
					path:data[0].content
				})
			})

			//email
			Download_content.Download_all_tags(title5)
			EventBus.$on(title5,data=>{
				// this.contact_nav_information=[]
				this.contact_nav_information.push({
					id:data[0].id,
					title:data[0].content,
					ico:'far fa-envelope',
					path:'Email'
				})
			})
			
		},
		data(){
			return{
				// message:'hola mundo',
				// logo_main:'http://www.imagen.com.mx/assets/img/imagen_share.png',
				// number_ws:'+51-545-545-545',
				// number_phone:'343-534-534',
				// mail:'info@cibercel.com',
				social_networks_nav_information:[
					// {id:1,title:'Facebook',ico:'fab fa-facebook-f',path:'https://es-la.facebook.com/'},
					// {id:2,title:'Youtube',ico:'fab fa-youtube',path:'https://www.youtube.com/'},
					// {id:3,title:'Instagram',ico:'fab fa-instagram',path:'https://www.instagram.com/?hl=es-la'},
				],
				contact_nav_information:[
					// {title:'+51689589325',ico:'fab fa-whatsapp',path:'https://www.whatsapp.com/?lang=es'},
					// {title:'202020',ico:'fas fa-phone-volume',path:'youtube'},
					// {title:'info@cibercel.com',ico:'far fa-envelope',path:'Email'},
				],
				animation:''

			}
		},
		methods:{
			go_to_social_newtwork(path){
				// alert(path)
				if(path==='Email'){
					// alert('Es email')
					EventBus.$emit('openDialog-sendEmail',true)
				}else{
					location.href=path
				}
			},
			open_dialog_contact(){
				EventBus.$emit('dialog-contact',{data_contact:this.contact_nav_information,
					data_social_network:this.social_networks_nav_information,open:true})
				// EventBus.$emit('dialog-contact',{data:this.contact_nav_information,open:true})
			},
			mouseOver(){
				console.log('hover')
            	this.animation='animated infinite bounce'
        	}
		},
		name:'Nav_information'
	}
</script>
<style>
	.button_zumb:hover{
		-webkit-animation: tiembla 0.3s ;
	}
	
	@-webkit-keyframes tiembla{
		0%  { -webkit-transform:rotateZ(0deg); }
		25% { -webkit-transform:rotateZ(-5deg); }
		50%  { -webkit-transform:rotateZ(0deg); }
		75%  { -webkit-transform:rotateZ(5deg); }
		100%{ -webkit-transform:rotateZ( 0deg); }
	}
</style>