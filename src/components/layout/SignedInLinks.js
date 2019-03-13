import React from 'react'
import { NavLink } from 'react-router-dom' 
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = () =>{
	return (
		<ul className="right">
		<li><NavLink to='/'>Write Feed</NavLink></li>
		<li><a onClick={props.signOut}>Log Out</a></li>
		<li><NavLink to='/'>IN</NavLink></li>
		</ul>
		)
}

const mapDispatchToProps=(dispatch)=>{
	return {
		signOut: ()=> dispatch(signOut())
	}
}

export default connect(null,mapDispatchToProps)(SignedInLinks)