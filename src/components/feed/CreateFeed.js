import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader';
import { createFeed } from '../../store/actions/feedActions'
import { Redirect } from 'react-router-dom'

class CreateFeed extends Component {
	state={
		title:'',
		message:'',
		feedImg: '',
		isUploading: false,
		progress: 0,
		feedImgURL: ''
	}
handlebeforeUploadStart = (maxWidth) => {
	if(maxWidth>800){
		throw Error('File too big')
	}
}
handleUploadStart = () => this.setState({isUploading: true, progress: 0});
handleProgress = (progress) => this.setState({progress});
handleUploadError = (error) => {
this.setState({isUploading: false});
}
handleUploadSuccess = (filename) => {
this.setState({feedImg: filename, progress: 100, isUploading: false});
firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({feedImgURL: url}));
};
handleChange= (e) =>{
	this.setState({
	[e.target.id]: e.target.value
	 })
	}

handleSubmit=(e)=>{
	e.preventDefault();
	this.props.createFeed(this.state)
	this.props.history.push('/');

	}
render(){
	const { auth } = this.props;

	if(!auth.uid) return <Redirect to='/signin' />

	return(
		<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
				<h5 className="grey-text text-darken-3">Write Post</h5>
				<div className="input-field">
				<label htmlFor="email" style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>Title</label>
				<input type="text" id="title" onChange={this.handleChange}/>
				</div>
				<div className="input-field">
				<label htmlFor="content">Message</label>
				<textarea className="materailize-textarea" id="message" onChange={this.handleChange}/>
				</div>

				<label htmlFor="feedImg">Feed Image:</label>
				{this.state.isUploading &&
				<p>Progress: {this.state.progress}</p>
				}
				{this.state.feedImgURL &&
				<img src={this.state.feedImgURL} />
				}
				<FileUploader
				accept="image/*"
				name="feedImg"
				beforeUploadStart={this.handlebeforeUploadStart}
				filename={file => this.state.title + file.name.split('.')[1]}
				storageRef={firebase.storage().ref('images')}	
				onUploadStart={this.handleUploadStart}
				onUploadError={this.handleUploadError}
				onUploadSuccess={this.handleUploadSuccess}
				onProgress={this.handleProgress}
				/>

				<div className="input-field">
				<button className="btn pink lighten-1 z-depth-0">Add Feed</button>
				</div>
				</form>
				</div>

			)
	}
}

const mapStateToProps=(state)=>{
	return{
		auth: state.firebase.auth
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		createFeed:(feed)=>dispatch(createFeed(feed))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFeed)