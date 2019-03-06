import React from 'react'
import { NavLink } from 'react-router-dom' 

const SignedInLinks = () =>{
	return (
		<ul className="right">
		<li><NavLink to='/'>Write Feed</NavLink></li>
		<li><NavLink to='/'>Logout</NavLink></li>
		<li><NavLink to='/'>IN</NavLink></li>
		</ul>
		)
}

export default SignedInLinks