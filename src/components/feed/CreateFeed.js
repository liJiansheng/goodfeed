import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateFeed } from '../../store/actions/feedActions'
class CreateFeed extends Component {
	state={
		title:'',
		message:''
	}
handleChange= (e) =>{
	this.setState({
	[e.target.id]: e.target.value
	 })
	}

handleSubmit=(e)=>{
	e.preventDefault();
	this.props.createFeed(this.state)

	}
render(){
	return(
		<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Write Post</h5>
				<div className="input-field">
				<label htmlFor="email">Title</label>
				<input type="text" id="title" onChange={this.handleChange}/>
				</div>
				<div className="input-field">
				<label htmlFor="content">Message</label>
				<textarea className="materailize-textarea" id="message" onChange={this.handleChange}/>
				</div>
				<div className="input-field">
				<button className="btn pink lighten-1 z-depth-0">Add Feed</button>
				</div>
				</form>
				</div>

			)
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		CreateFeed:(feed)=>dispatch(createFeed(feed))
	}
}

export default connect(null, mapDispatchToProps)(CreateFeed)