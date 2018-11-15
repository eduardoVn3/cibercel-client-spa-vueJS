import {EventBus} from '../../main'
export default{
	Send_alert_message:(canal,message)=>{
		EventBus.$emit(canal,message)
	},
	stop_loging:(canal,message)=>{
		EventBus.$emit(canal,message)
	},
	Send_page:(canal,message)=>{
		EventBus.$emit(canal,message)
	},
	Send_tags:(canal,message)=>{
		EventBus.$emit(canal,message)
	},
	Send_data_base:(canal,message)=>{
		EventBus.$emit(canal,message)
	},
	Send_all_messages:(canal,message)=>{
		EventBus.$emit(canal,message)
	}
}