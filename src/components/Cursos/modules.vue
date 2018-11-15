<template>
	<div class="app">
		<v-layout row wrap>
			<v-flex xs1>
		    <v-card-text class="text-xs-center">
		    	<a @click="back">
		    		<v-icon>fas fa-arrow-left</v-icon>
		    	</a>
		    </v-card-text>
		  </v-flex>
		  <v-flex xs10>
		    <v-card-text class="text-xs-center">
		      Modulos
		    </v-card-text>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>

		<v-layout column>
    <v-flex xs12>
      <!-- <v-card> -->
          <v-layout align-center justify-center row wrap fill-height>
            <v-flex
            xs10 sm10 md5 lg5 SG5
              v-for="card in cards"
              :key="card.title"
              class="list_modules_hover mt-3"
              mt-2
            >
            <a @click="go_to_class_page(card)">
              <v-card>
                <v-card-media
                  :src="card.img"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                  </v-container>
                </v-card-media>

                <v-card-title primary-title>
			          <div>
			            <h3 class="headline mb-0 ml-5 pl-5">{{card.title}}</h3>
			            <span class="grey--text ml-5 pl-5">Horario normal (Lunes a Viernes): {{card.date_one}}</span>
			            <br>
			            <span class="grey--text ml-5 pl-5">Horario intensivo (Sabado y Domingo): {{card.date_two}}</span>
			          </div>
			        </v-card-title>

	                <!-- <v-card-actions>
	                  <v-layout fill-height>
	                      <v-flex xs12 align-end flexbox>
	                        <span class="headline black--text" v-text="card.title"></span>
	                        <span class="grey--text">Horario normal (Lunes a Viernes): {{card.date_one}}</span>
			            	<br>
			            	<span class="grey--text">Horario intensivo (Sabado y Domingo): {{card.date_two}}</span>
	                      </v-flex>
	                    </v-layout>
	                </v-card-actions> -->
	              </v-card>
              </a>
            </v-flex>
          </v-layout>
      <!-- </v-card> -->
      
    </v-flex>
  </v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let data_validate;
	export default{
		mounted(){
			this.cards=[]
			EventBus.$on('modules-list_route',data=>{
				this.cards=[]
				for(let index in data){
					this.cards.push({
						id:data[index].id,
						title:data[index].title,
						img:link+data[index].img,
						date_one:data[index].date_one,
						date_two:data[index].date_two,
						course_id:data[index].course_id
					})
				}
			})
			if(typeof data_validate=== 'undefined'){
				Download_content.Index_modules()
			}else{
				console.log('tiene data')
			}
		},
		data(){
			return{
				cards: [],
		  //       { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
		  //       { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
		  //       { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
		  //     ]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			go_to_class_page(item){
				Download_content.Download_all_modules_class(item.id,'class/','class-list_route')
				this.$router.push('/clases')
			}
		}
	}
</script>
<style>
	.list_modules_hover{
		-webkit-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
		-moz-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
		box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.25);
	}
	.list_modules_hover:hover{
		-webkit-transform:scale(1.1);
		-moz-transform:scale(1.1);
		-ms-transform:scale(1.1);
		-o-transform:scale(1.1);
		transform:scale(1.1);
		z-index: 9999;
		-webkit-transition:all .9s ease; /* Safari y Chrome */
		-moz-transition:all .9s ease; /* Firefox */
		-o-transition:all .9s ease; /* IE 9 */
		-ms-transition:all .9s ease; /* Opera */

		-webkit-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.75);
		-moz-box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.75);
		box-shadow: -1px 9px 21px -2px rgba(0,0,0,0.75);
	}
</style>