<template>
	<div class="app" v-scroll="onScroll">
		<div v-if="!view_all">
			<Loader></Loader>
		</div>
		<div v-show="view_all">
			<!-- nav de informacion -->
		<Nav-information id="Nav_information"></Nav-information>
		<!-- fin nav de informacion -->

		<!-- nav de paginas -->
		<Nav-navigator></Nav-navigator>
		<!-- fin nav de paginas -->
		<!-- <v-divider></v-divider> -->
		<!-- carrousel -->
		<Carousel></Carousel>
		<!-- fin de carrousel -->
		<!-- refran -->
		<Message-ref></Message-ref>
		<!-- fin de refran -->
		<!-- video publicitario -->
		<Advertising-video style="margin-top: 5%; margin-bottom: 5%;" id="Advertising_video"></Advertising-video>
		<!-- fin de video publicitario -->
		<!-- ventajas y beneficios -->
		<Advantages-benefits id="Advantages_benefits"></Advantages-benefits>
		<!-- fin de ventas y cursos -->
		<!-- nuestros cursos -->
		<Our-courses></Our-courses>
		<!-- fin de nuestros cursos -->
		<!-- informacion de cursos -->
		<Course-information></Course-information>
		<!-- fin de informacion de cursos -->
		<!-- dialog contacto -->
		<Dialog-contact></Dialog-contact>
		<!-- fin de dialog contacto -->
		<!-- dialog de envio de email -->
		<Dialog-email></Dialog-email>
		<!-- fin del dialog de envio de email -->

		<!-- <Button-up></Button-up> -->
		</div>
		
	</div>
</template>
<script>
import animateScrollTo from 'animated-scroll-to';
import Nav_information from './Nav_information'
import Nav_navigator from './Nav_navigator'
import Carousel from './Carousel'
import Message_ref from './Message_ref'
import Advertising_video from './Advertising_video'
import Advantages_benefits from './Advantages_benefits'
import Our_courses from './Our_courses'
import Course_information from './Course_information'
import Dialog_contact_information from './Dialog_contact_information'
import Dialog_email_send from './Dialog_email_send'
import Loader from '.././Templates/Loader'
// import Button_fixed_up from '.././Templates/Button_fixed_up'
	export default{
		components:{
			'Nav-information':Nav_information,
			'Nav-navigator':Nav_navigator,
			'Carousel':Carousel,
			'Message-ref':Message_ref,
			'Advertising-video':Advertising_video,
			'Advantages-benefits':Advantages_benefits,
			'Our-courses':Our_courses,
			'Course-information':Course_information,
			'Dialog-contact':Dialog_contact_information,
			'Dialog-email':Dialog_email_send,
			'Loader':Loader,
			// 'Button-up':Button_fixed_up,
		},
		mounted(){
			setTimeout(()=>{
				this.view_all=true
			},4000)
		},
		data(){
			return{
				offsetTop: 0,
				view_all:false,
			}
		},
		methods:{
			onScroll (e) {
				this.offsetTop = window.pageYOffset || document.documentElement.scrollTop	
		        // console.log(this.offsetTop)
		    },
		}
	}
</script>
<style>
</style>