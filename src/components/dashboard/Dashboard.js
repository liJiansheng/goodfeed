import React, { Component } from 'react'
import Notifications from './Notifications'
import FeedList from '../feed/FeedList'
import { connect } from 'react-redux'

class Dashboard extends Component{
	render(){
		const { feeds } =this.props

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
		feeds:state.feed.feeds
	}

}
export default connect(mapStateToProps)(Dashboard) 