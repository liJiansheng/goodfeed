import React from 'react'
import { connect } from 'react-redux' 

const Notifications =(props)=>{

	const { profile } = props;

	return(
		 <div className="section">
    		<div className="col s12 m7">
      			<div className="card">
        			<div className="card-image">
          				<img src="images/profile.jpg"></img>
        			</div>
        			<div class="card-content">
          			<p><strong>{profile.firstName} {profile.lastName}</strong></p>
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