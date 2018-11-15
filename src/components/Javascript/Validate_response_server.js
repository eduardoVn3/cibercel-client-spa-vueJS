import {EventBus} from '../../main'
import Send_alert from './Send_alert'
export default{
	Validate_server_data:(data,canal,success,fail)=>{
		if(data.length > 0){
			// console.log('Respuesta validad:',data)
			window.localStorage.setItem('cibercel_storage_login',true);
			Send_alert.Send_alert_message(canal,success)
			Send_alert.stop_loging('stop-login',false)
			Send_alert.Send_page('send-page',true)
		}else{
			// console.log('Respuesta validad es vacia')
			Send_alert.Send_alert_message(canal,fail)
			Send_alert.stop_loging('stop-login',false)
			Send_alert.Send_page('send-page',false)
		}
	}
}