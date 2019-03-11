export const createFeed=(feed)=>{
	return (dispatch, getState)=>{
		dispatch({type:'CREATE_FEED', feed });
	}

};
