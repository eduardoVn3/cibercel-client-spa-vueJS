import Route_api from '../../Config/Config_connection'
import Validate_response_serve from './Validate_response_server'
import axios from 'axios'
import Send_alert from './Send_alert'
let tags_data;
let properties_data;
let Tags='tags/'
let Properties='properties/'
let Courses='courses/'
let Modules='modules/'
let Class='class/'
let Index='index'
let Find='find'
let Show='show'
export default{
	Download_all_tags:(title)=>{
		var promise=new Promise((resolve,reject)=>{
			axios.post(Route_api+Tags+Find,{title:title}).then(result=>{
				// console.log('result tag',result.data)
				resolve(result.data[0],title)
			}).catch(err=>{
				console.log(err)
			})
		})

		promise.then(result_promise=>{
			// console.log(result_promise)
			axios.post(Route_api+Properties+Find,{id:result_promise.id}).then(result=>{
				// console.log('result de propiedades',result)
				Send_alert.Send_all_messages(result_promise.title,result.data)
			}).catch(err=>{
				// console.log(err)
			})
		}).catch(err=>{
			// console.log(err)
		})
	},
	Download_all_courses:(title)=>{
		// var promise=new Promise((resolve,reject)=>{
		// 	axios.post(Route_api+Tags+Find,{title:title}).then(result=>{
		// 		// console.log('result tag',result.data)
		// 		resolve(result.data[0],title)
		// 	}).catch(err=>{
		// 		console.log(err)
		// 	})
		// })

		// promise.then(result_promise=>{
		// 	console.log(result_promise)
		// 	axios.post(Route_api+Courses+Find,{id:result_promise.id}).then(result=>{
		// 		console.log('result de propiedades',result)
		// 		Send_alert.Send_all_messages(result_promise.title,result.data)
		// 	}).catch(err=>{
		// 		console.log(err)
		// 	})
		// }).catch(err=>{
		// 	console.log(err)
		// })
		axios.get(Route_api+Courses+Index).then(result=>{
			// console.log('CURSOS',result.data)
			Send_alert.Send_all_messages('courses-all',result.data)
		}).catch(err=>{
			// console.log(err)
		})
	},
	Download_all_modules_class:(id,route,canal)=>{
		axios.post(Route_api+route+Find,{id:id}).then(result=>{
			// console.log(route+' :  '+result.data)
			Send_alert.Send_all_messages(canal,result.data)
		}).catch(err=>{
			// console.log(err)
		})
	},
	Index_modules:()=>{
		axios.get(Route_api+Modules+Index).then(result=>{
			// console.log(route+' :  '+result.data)
			Send_alert.Send_all_messages('modules-list_route',result.data)
		}).catch(err=>{
			// console.log(err)
		})
	},
	Index_class:()=>{
		axios.get(Route_api+Class+Index).then(result=>{
			// console.log(route+' :  '+result.data)
			Send_alert.Send_all_messages('class-list_route',result.data)
		}).catch(err=>{
			// console.log(err)
		})
	}
}