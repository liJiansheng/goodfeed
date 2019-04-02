import React from 'react'
import { connect } from 'react-redux' 

const Notifications =(props)=>{

	const { profile } = props;

	return(
		 <div className="section">
    		<div className="card z-depth-0">
      		<div className="card">
        	<div className="card-image">
          	<img src="img/profile.jpg" width="100px"></img>
        	</div>
        <div class="card-content">
          <h5>{profile.firstName} {profile.lastName}</h5>
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