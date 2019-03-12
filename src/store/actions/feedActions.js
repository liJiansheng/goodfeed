export const createFeed=(feed)=>{
	return (dispatch, getState, { getFirebase, getFirestore })=>{
		const firestore=getFirestore();

		firestore.collection('feeds').add({
			...feed,
			authorFirstName:'Lee',
			authorLastName:'KS',
			authorId: 12345,

		}).then(()=>{
			dispatch({type:'CREATE_FEED', feed });	
		}).catch((err)=>{
			dispatch({type:'CREATE_FEED_ERROR',err});
		})
		
	}

};
