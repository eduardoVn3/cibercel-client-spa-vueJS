<template>
	<v-layout row wrap>
	  <v-flex xs12>
	  	<v-navigation-drawer
	      v-model="drawer"
	      absolute
	      temporary
	    >
	      <v-list class="pa-1">
	      	<v-layout row wrap>
	      	  <v-flex xs12>
	      	  	<img :src="logo_main" style="width: 70%;">
	      	  </v-flex>
	      	</v-layout>
	      </v-list>
	      <v-list class="pt-0" dense>
	        <v-divider></v-divider>

	        <v-list-tile
	          v-for="(item_draw_nav_button_menu,index) in nav_button_menu_small"
	          :key="index"
	          @click="to_go_page(item_draw_nav_button_menu.path,item_draw_nav_button_menu.title)"
	        >
	          <v-list-tile-action>
	            <v-icon>{{ item_draw_nav_button_menu.ico }}</v-icon>
	          </v-list-tile-action>

	          <v-list-tile-content>
	            <v-list-tile-title>{{ item_draw_nav_button_menu.title }}</v-list-tile-title>
	          </v-list-tile-content>
	        </v-list-tile>
	      </v-list>
	    </v-navigation-drawer>
	    <v-toolbar color="blanco">
	      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-only hidden-xl-only"></v-toolbar-side-icon>
	      <v-toolbar-title>
	      	<!-- <v-card> -->
	      	  <a href="/"><img :src="logo_main" alt="" style="width: 230px;" class="mt-1 hidden-xs-only hidden-sm-only hidden-md-only"></a>
	      	<!-- </v-card> -->
	      </v-toolbar-title>
	      <!-- <v-divider class="mx-5 hidden-xs-only hidden-sm-only hidden-md-only"  vertical></v-divider> -->
		    <v-spacer></v-spacer>
		    <v-toolbar-items class="hidden-xs-only hidden-sm-only hidden-md-only">
			    <v-btn flat v-for="(items_nav_menu,index) in nav_button_menu" 
			    :key="items_nav_menu.title"
			    class="button_nav"
			    @click="to_go_page(items_nav_menu.path,items_nav_menu.title)">
			    <div class="subrayado_animation">
			      {{items_nav_menu.title}}
			    </div>
			    </v-btn>
			    <v-menu
		    		  open-on-hover
				      transition="slide-y-transition"
				      bottom
				      offset-y
				    >
				      <v-btn
				      
				      @click="to_go_page('/Cursos','Cursos')"
				        slot="activator"
				        flat
				      >
				        <div class="subrayado_animation">
				        	Cursos
				        </div>
				        <v-icon class="ml-2">{{icon_arrow_courses}}</v-icon>
				      </v-btn>
				      <v-list>
				        <v-list-tile
				          v-for="(item, i) in items_courses"
				          :key="i"
				          @click="to_go_page_modules(item)"
				        >
				          <v-list-tile-title>{{ item.title }}({{item.subtitle}})</v-list-tile-title>
				        </v-list-tile>
				      </v-list>
				    </v-menu>
			</v-toolbar-items>
	    </v-toolbar>
	  </v-flex>
	</v-layout>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title='logo'
// let link='http://localhost:3000/images/'
	export default{
		name:'Nav_navigator',
		mounted(){
			//logo
			this.logo_main=link+'Logo.Cibercel.Horizontal.svg'
			Download_content.Download_all_tags(title)
			// EventBus.$on(title,data=>{
			// 	// console.log('logo',data)
			// 	this.logo_main=link+data[0].img
			// })
			Download_content.Download_all_courses();
			EventBus.$on('courses-all',data=>{
				this.items_courses=data
			})
		},
		data(){
			return{
				drawer: null,
				logo_main:'/static/img/assets/Logo_Cibercel_Cuadrado.svg',
				nav_button_menu:[
					{title:'Inicio',ico:'fas fa-home',path:'/'},
					{title:'Nosotros',ico:'fas fa-users',path:'/Nosotros'},
					// {title:'Cursos',ico:'fas fa-glasses',path:'/Cursos'},
					{title:'Productos',ico:'fas fa-umbrella',path:'/Productos'},
					{title:'Empresa',ico:'fas fa-building',path:'/Empresa'},
					{title:'Casos de exito',ico:'fas fa-award',path:'/Casoexito'},
					{title:'Contacto',ico:'fas fa-address-book',path:'/Contacto'},
				],
				nav_button_menu_small:[
					{title:'Inicio',ico:'fas fa-home',path:'/'},
					{title:'Nosotros',ico:'fas fa-users',path:'/Nosotros'},
					{title:'Cursos',ico:'fas fa-glasses',path:'/Cursos'},
					{title:'Productos',ico:'fas fa-umbrella',path:'/Productos'},
					{title:'Empresa',ico:'fas fa-building',path:'/Empresa'},
					{title:'Casos de exito',ico:'fas fa-award',path:'/Casoexito'},
					{title:'Contacto',ico:'fas fa-address-book',path:'/Contacto'},
				],
				items_courses: [
			        { title: '' },
			      ],
			      icon_arrow_courses:'fas fa-angle-down'
			}
		},
		methods:{
			to_go_page(path,title){
				// alert(title)
				EventBus.$emit('title_page_nav',title)
				this.$router.push(path)
			},
			to_go_page_modules(item){
				// EventBus.$emit('modules-nav',item)
				Download_content.Download_all_modules_class(item.id,'modules/','modules-list_route')
				this.$router.push('/modulos')
			},
			hover_init(){
				setTimeout(()=>{
					this.icon_arrow_courses='fas fa-angle-up'
				}, 200);
			},
			hover_finish(){
				setTimeout(()=>{
					this.icon_arrow_courses='fas fa-angle-down'
				}, 500);
				

			}
		}
	}
</script>
<style>
.subrayado_animation {
display: inline-block;
position: relative;
text-decoration: none;
}
.subrayado_animation:before,
.subrayado_animation:after {
content: "";
display: block;
margin: auto;
height: 2px;
width: 0px;
background: #00A6C4;
transition: all .8s;
}
.subrayado_animation:hover:before,
.subrayado_animation:hover:after {
width: 100%;
}
</style>