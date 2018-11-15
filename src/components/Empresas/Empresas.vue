<template>
	<div class="app">
		<Empresas-img></Empresas-img>

		<Empresas-content></Empresas-content>
	</div>
</template>
<script>
import Empresas_img from './Empresas_img'
import Empresas_content from './Empresas_content'
	export default{
		name:'Empresas',
		components:{
			'Empresas-img':Empresas_img,
			'Empresas-content':Empresas_content,
		},
		data(){
			return{

			}
		}
	}
</script>