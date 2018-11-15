<template>
	<v-container>
		<v-layout row wrap>
		  <v-flex xs12 sm12 md6 lg6 SG6>
		  	<v-card class="elevation-18">
		        <img :src="logo_Advertising_video.img" alt="" height="100%" 
		        style="width: 100%;" >
		        <v-card-text text-xs-center mt-1>
		          <div>
		            <h3 class="headline">{{logo_Advertising_video.title}}</h3>
		            <div>{{logo_Advertising_video.content}}</div>
		          </div>
		        </v-card-text>
		      </v-card>			
		  </v-flex>
		  <v-flex xs12 sm12 md6 lg6 SG6>
		    <iframe class="elevation-18" width="100%" height="100%" :src="video_Advertising_video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		  </v-flex>
		</v-layout>
	</v-container>
</template>
<script>
import {EventBus} from '../.././main'
import Download_content from '.././Javascript/Download_content'
import link from '../../Config/Link'
let title2='imagen_contenido'
let title='video'
// let link='http://localhost:3000/images/'
	export default{
		name:'Advertising_video',
		mounted(){
			Download_content.Download_all_tags(title)
			EventBus.$on(title,data=>{
				// console.log('recibiendo en video',data)
				this.video_Advertising_video='https://www.youtube.com/embed/'+data[0].content
			})
			//imagen contenido
			Download_content.Download_all_tags(title2)
			EventBus.$on(title2,data=>{
				// console.log('recibiendo en imgen de contenido',data)
				this.logo_Advertising_video={
					title:data[0].title,
					content:data[0].content,
					img:link+data[0].img
				}
			})
		},
		data(){
			return{
				logo_Advertising_video:{title:'',content:'',img:''},
				video_Advertising_video:''
			}
		}
	}
</script>