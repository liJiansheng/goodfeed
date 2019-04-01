import React from 'react'
import { connect } from 'react-redux' 

const Notifications =(props)=>{

	const { profile } = props;

	return(
		<div className="section">
			<div className="card z-depth-0">
			<div className="card-content">
			<p>{profile.firstName} {profile.lastName}</p>
			</div>
			</div>
			</div>

		</div>
		)
}

const mapStateToProps=(state)=>{

	return{
		profile:state.firebase.profile

	}
}
export default connect(mapStateToProps)(Notifications)