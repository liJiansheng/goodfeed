import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect } from 'react-router-dom'
import moment from 'moment'

const FeedDetails=(props)=>{
	const { feed,auth }= props;

	if(!auth.uid) return <Redirect to='/signin' />

	if (feed){
		return(
			<div className="container section feed-details">
			<div className="card z-depth-0">
			<div className="card-content">
			<img src={ feed.feedImgURL }></img>
			<span className="card-title">{ feed.title }</span>
			<p>{ feed.message }</p>
			</div>
			<div className="card-action gret lighten-4 grey-text">
			<div>Posted by { feed.authorFirstName } { feed.authorLastName }</div>
			<div>{moment(feed.createdAt.toDate()).calendar()}</div>
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

const mapStateToProps = (state,ownProps) => {

	const id=ownProps.match.params.id;
	const feeds=state.firestore.data.feeds;
	const feed=feeds ? feeds[id] : null;
	return{
		feed: feed,
		auth: state.firebase.auth
	}

}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'feed'}
		])
)(FeedDetails)