<template>
	<div class="app">
		<!-- <Nav-back></Nav-back> -->
		<v-divider></v-divider>
		<!-- <Course-img></Course-img>
		<Nav-courses></Nav-courses>
		<Dialog-class></Dialog-class> -->
		<List-courses></List-courses>
		<List-modules></List-modules>
		<List-class></List-class>
	</div>
</template>
<script>
// import Nav_back from './Nav_back'
// import Nav_options_courses from './Nav_options_courses'
// import Courses_view_img from './Courses_view_img'
// import Dialog_class from './Dialog_class'
import List_courses from './List_courses'
import List_modules from './List_modules'
import List_class from './List_class'
	export default{
		name:'Cursos',
		components:{
			// 'Nav-back':Nav_back,
			// 'Nav-courses':Nav_options_courses,
			// 'Course-img':Courses_view_img,
			// 'Dialog-class':Dialog_class,
			'List-courses':List_courses,
			'List-modules':List_modules,
			'List-class':List_class,

		},
		date(){
			return{

			}
		}
	}
</script>