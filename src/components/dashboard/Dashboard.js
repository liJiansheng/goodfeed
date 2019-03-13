import React, { Component } from 'react'
import Notifications from './Notifications'
import FeedList from '../feed/FeedList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect } from 'react-router-dom'

class Dashboard extends Component{
	render(){
		const { feeds, auth } =this.props;
		if(!auth.uid) return <Redirect to='/signin' />

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
					<FeedList feeds={feeds}/>
					</div>	
					<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>	
			</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return{
		feeds:state.firestore.ordered.feeds,
		auth: state.firebase.auth
	}

}
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
	{ collection: 'feeds' }
	])
)(Dashboard) 