<template>
	<div class="app">
		<Nosotros-img></Nosotros-img>

		<Tabs></Tabs>
	</div>
</template>
<script>
import Nosotros_img from './Nosotros_img'
import Tabs from './Tabs'
	export default{
		name:'Nosotros',
		components:{
			'Nosotros-img':Nosotros_img,
			'Tabs':Tabs,
		},
		data(){
			return{

			}
		}
	}
</script>