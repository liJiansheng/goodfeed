export const createFeed=(feed)=>{
	return (dispatch, getState, { getFirebase, getFirestore })=>{
		const firestore=getFirestore();
		const profile=getState().firebase.profile;
		const authorId=getState().firebase.auth.uid;
		firestore.collection('feeds').add({
			...feed,
			authorFirstName:profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()

		}).then(()=>{
			dispatch({type:'CREATE_FEED', feed });	
		}).catch((err)=>{
			dispatch({type:'CREATE_FEED_ERROR',err});
		})
		
	}

};
