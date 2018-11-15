import Route_api from '../../Config/Config_connection'
import Validate_response_serve from './Validate_response_server'
import axios from 'axios'
import Send_alert from './Send_alert'
const User='users/';
const Login='login'

const tags='tags/';
const properties='properties/'
const modules='modules/'
const class_temario='class/'

const index='index'
const store='store'
const update='update'
const find='find'
const deleted='delete'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'X-Requested-With, Content-Type, Accept, Origin, Authorization';
// axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['enctype'] = 'multipart/form-data';


let error={text:'Error al conectar con el servidor',color:'error',time:5000,ico:'',snackbar:true}
let success={text:'Se ha registrado con exito',color:'success',time:5000,ico:'',snackbar:true}
export default{
	Login:(data_user)=>{
		axios.post(Route_api+User+Login,{
			nickname:data_user.nickname,
			password:data_user.password
		}).then(result=>{
			// console.log('respuesta serve:',result.data)
			let config_success={text:'Login con exito',color:'success',time:2000,ico:'',snackbar:true}
			let config_fail={text:'Error de login no hay coincidencias',color:'error',time:2000,ico:'',snackbar:true}
			Validate_response_serve.Validate_server_data(result.data,'alert-message',config_success,config_fail)
		}).catch(err=>{
			console.log(err)
			Send_alert.Send_alert_message('alert-message',error)
			Send_alert.stop_loging('stop-login',false)
		})
	},
	Get_all_tags:()=>{
		axios.get(Route_api+tags+index).then(result=>{
			Send_alert.Send_tags('send-tags',result.data);
		}).catch(err=>{
			Send_alert.Send_alert_message('alert-message',error)
		})
	},
	Download_items_database:(route,id)=>{
		axios.post(Route_api+route+find,{
			id:id
		}).then(result=>{
			Send_alert.Send_data_base('data-data_base',result.data)
		}).catch(err=>{
			Send_alert.Send_alert_message('alert-message',error)
		})
	},
	Update_Data_post_properties:(data_user,img,data_full,route)=>{
		var data=new FormData();
		for(let index in data_user){
			data.append(index,data_user[index]);
		}
        data.append('img',img);
        data.append('id',data_full.id);
        axios.post(Route_api+route+update,data).then(result=>{
        Send_alert.Send_alert_message('alert-message',success)
        Send_alert.Send_all_messages('dialog-edit_success',false)
          // console.log(result)
        }).catch(err=>{
          // console.log(err)
          Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Store_Data_post_properties:(data_user,img,route,tag_id)=>{
		var data=new FormData();
			for(let index in data_user){
				data.append(index,data_user[index]);
			}
	        data.append('img',img);
	        data.append('tag_id',tag_id);
	        axios.post(Route_api+route+store,data).then(result=>{
	        Send_alert.Send_alert_message('alert-message',success)
	        Send_alert.Send_all_messages('dialog-edit_success',false)
	          // console.log(result)
	        }).catch(err=>{
	          // console.log(err)
	          Send_alert.Send_alert_message('alert-message',error)
	        })
	},
	Delete_data_base_item:(id,route)=>{
		// console.log('id',id)
		// console.log(route)
		axios.post(Route_api+route+deleted,{
			id:id
		}).then(result=>{
        Send_alert.Send_alert_message('alert-message',{text:result.data,color:'info',time:5000,ico:'',snackbar:true})
          // console.log(result)
        }).catch(err=>{
          // console.log(err)
          Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Get_all_modules:(id)=>{
		axios.post(Route_api+modules+find,{id:id}).then(result=>{
			Send_alert.Send_all_messages('send-modules',result)
		}).catch(err=>{
			Send_alert.Send_alert_message('alert-message',error)
		})
	},
	Get_all_class:(id)=>{
		axios.post(Route_api+class_temario+find,{id:id}).then(result=>{
			Send_alert.Send_all_messages('send-class',result)
		}).catch(err=>{
			Send_alert.Send_alert_message('alert-message',error)
		})
	},
	Add_data_module:(data_inputs,img,route,course_id)=>{
		var data=new FormData();
		for(let index in data_inputs){
			data.append(index,data_inputs[index]);
		}
        data.append('img',img);
        data.append('course_id',course_id);
        axios.post(Route_api+route+store,data).then(result=>{
        Send_alert.Send_alert_message('alert-message',{text:result.data,color:'success',time:5000,ico:'',snackbar:true})
          // console.log(result)
        }).catch(err=>{
          // console.log(err)
          Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Add_data_class:(data_inputs,subtitle,quantity,img,module_id,route)=>{
		var data=new FormData();
			for(let index in data_inputs){
				data.append(index,data_inputs[index]);
			}
        data.append('img',img);
        data.append('module_id',module_id);
        data.append('subtitle',subtitle);
        data.append('quantity',quantity);
        axios.post(Route_api+route+store,data).then(result=>{
        	Send_alert.Send_alert_message('alert-message',{text:result.data,color:'success',time:5000,ico:'',snackbar:true})
          	// console.log(result)
        }).catch(err=>{
          	// console.log(err)
          	Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Update_data_module:(data_inputs,img,route)=>{
		var data=new FormData();
			for(let index in data_inputs){
				data.append(index,data_inputs[index]);
			}
        data.append('img',img);
        axios.post(Route_api+route+update,data).then(result=>{
        Send_alert.Send_alert_message('alert-message',success)
          // console.log(result)
        }).catch(err=>{
          // console.log(err)
          Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Update_data_class:(data_inputs,subtitle,quantity,img,route)=>{
		var data=new FormData();
			for(let index in data_inputs){
				data.append(index,data_inputs[index]);
			}
        data.append('img',img);
        data.append('subtitle',subtitle);
        data.append('quantity',quantity);
        axios.post(Route_api+route+update,data).then(result=>{
        Send_alert.Send_alert_message('alert-message',success)
          // console.log(result)
        }).catch(err=>{
          // console.log(err)
          Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Delete_items_module_and_clas:(id,route)=>{
		axios.post(Route_api+route+deleted,{id:id}).then(result=>{
        Send_alert.Send_alert_message('alert-message',{text:result.data,color:'success',time:5000,ico:'',snackbar:true})
          // console.log(result)
        }).catch(err=>{
          // console.log(err)
          Send_alert.Send_alert_message('alert-message',error)
        })
	},
	Send_email:(item)=>{
		axios.post(Route_api+'email/'+store,item).then(result=>{
			console.log(result.data)
		}).catch(err=>{
			console.log(err)
		})
	}
}