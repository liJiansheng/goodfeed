import React from 'react'

const FeedSummary=({feed})=>{
	return(
			<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{feed.title}</span>
				<p>Posted By</p>
				<p className="grey-text">01 March, 1pm</p>
				</div>
				</div>

		)
}

export default FeedSummary