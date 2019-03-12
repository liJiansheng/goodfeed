import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const FeedDetails=(props)=>{
	const { feed }= props;
	if (feed){
		return(
			<div className="container section feed-details">
			<div className="card z-depth-0">
			<div className="card-content">
			<span className="card-title">{feed.title}</span>
			<p>{feed.message}</p>
			</div>
			<div className="card-action gret lighten-4 grey-text">
			<div>Posted by {feed.authorFirstName} {feed.authorLastName}</div>
			<div>3 March 2019</div>
			</div>
			</div>
			</div>	
	)
	}
	return(
		<div className="container center">
		<p> Loading...</p>
		</div>

		)

}

const mapStateToProps=(state,ownProps)=>{
	const id=ownProps.props.match.params.id
	const feeds=state.firestore.data.feeds
	const feed=feed ? feeds[id] : null
	return{

		feed: feed
	}

}
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'feed'}
		])
)(FeedDetails)