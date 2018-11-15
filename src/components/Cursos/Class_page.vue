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
		      Clases
		    </v-card-text>
		  </v-flex>
		</v-layout>
		<v-divider></v-divider>
		<v-layout row wrap>
	  <v-flex xs12>
	    <v-expansion-panel popout>
		      <v-expansion-panel-content
		        v-for="(item_class, i) in data_class"
		        :key="i"
		        class="pb-5 pt-5"
		      >
		        <v-layout
		          slot="header"
		          align-center
		          row
		          spacer
		        >
		          <v-flex xs4 sm2 md1>

		            <v-avatar
		              slot="activator"
		              size="36px"
		            >
		              <v-icon
		              > fas fa-book</v-icon>
		            </v-avatar>
		          </v-flex>

		          <v-flex xs12 sm5 md3 class="pb-5">
		            <strong class="text-xs-center p-5">{{item_class.title}}</strong>
		            <span
		              class="grey--text"
		            >
		              <!-- &nbsp;({{ message.total }}) -->
		            </span>
		          </v-flex>

		          <!-- <v-flex no-wrap xs5 sm3>
		            <strong v-html="message.title"></strong>
		          </v-flex> -->
					<v-spacer></v-spacer>
		          <v-flex
		            v-if="item_class.quantity"
		            class="grey--text"
		            ellipsis
		            hidden-sm-and-down
		          >
		            &mdash;
		            Clases: {{ item_class.quantity }}
		          </v-flex>
		        </v-layout>

		        <v-card>
		          <v-divider></v-divider>
		          <v-card-text class="text-xs-start ml-5 pl-5 hidden-xs-only" v-for="(item_subtitle_class, index) in item_class.subtitle" :key="index">
		          	<ul>
		          		<li>{{item_subtitle_class}}</li>
		            </ul>
		        </v-card-text>
		        <v-card-text class="text-xs-start hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only" v-for="(item_subtitle_class, index) in item_class.subtitle" :key="index">
		          	<ul>
		          		<li>{{item_subtitle_class}}</li>
		            </ul>
		        </v-card-text>
		        </v-card>
		      </v-expansion-panel-content>
		    </v-expansion-panel>
	  </v-flex>
	</v-layout>
	</div>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
	export default{
		mounted(){
			this.data_class=[]
			EventBus.$on('class-list_route',data=>{
				this.data_class=[]
				// this.data_class=data
				var subtitle=[]
				for(let index in data){
					this.data_class.push({
						id:data[index].id,
						title:data[index].title,
						quantity:data[index].quantity,
					})
					var data_split=data[index].subtitle.split('\n')
					// console.log(data)
					for(var i=0;i<data_split.length;i++){
						if(data_split[i].length>0 && data_split[i]!=""){
							// console.log(data_split[i])
							subtitle.push(data_split[i])

						}else{
							
						}
					}
					this.data_class[index].subtitle=subtitle
					subtitle=[]
				}
				
				
			})
			if(typeof data_class=== 'undefined'){
				Download_content.Index_class()
			}
		},
		data(){
			return{
				data_class:[],
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
</style>