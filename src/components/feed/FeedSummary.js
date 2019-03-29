import React from 'react'
import moment from 'moment'

const FeedSummary=({feed})=>{
	return(
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
			<img src={ feed.feedImgURL } width="500px"></img>
				<span className="card-title">{feed.title}</span>
				<p>Posted By  {feed.authorFirstName} {feed.authorLastName}</p>
				<p className="grey-text">{moment(feed.createdAt.toDate()).calendar()}</p>
			</div>
		</div>

		)
}

export default FeedSummary