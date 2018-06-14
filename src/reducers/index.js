import { combineReducers } from 'redux';

export default combineReducers({

	 linkReducers: (state={},action)=>{
	 	if(action.type === 'LINK_LIST'){
	 		return action.payload
	 	}
	 	else{
	 		return[]
	 	}
	 }
})