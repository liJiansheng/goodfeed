import React, { Component } from 'react'
import Notifications from './Notifications'
import FeedList from '../feed/FeedList'

class Dashboard extends Component{
	render(){
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
					<FeedList />
					</div>	
					<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>	
			</div>
			)
	}
}

export default Dashboard