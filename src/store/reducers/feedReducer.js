

const feedReducer=(state=initState, action)=>{

	switch(action.type){
		case 'CREATE_FEED':
			return state;
		case 'CREATE_FEED_ERROR':
			return state;
		default:
			return state;		
	}
}

export default feedReducer
