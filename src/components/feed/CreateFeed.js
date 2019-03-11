import React, { Component } from 'react'

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
console.log(this.state)
}
render(){
return(
	<div className="container">
			<form onSubmit={this.handleSubmit} className="white">
			<h5 className="grey-text text-darken-3">Sign In</h5>
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
export default CreateFeed