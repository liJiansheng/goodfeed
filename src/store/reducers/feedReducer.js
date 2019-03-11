const initState={
	feeds: [
	{id:'1', title:'Day 1', message:'its a good day'},
	{id:'2', title:'Day 2', message:'its a better day'},
	{id:'3', title:'Day 3', message:'its a best day'},
	]

}

const feedReducer=(state=initState, action)=>{

	switch(action.type){
		case 'CREATE_FEED':
		

	}
	return state
}

export default feedReducer
