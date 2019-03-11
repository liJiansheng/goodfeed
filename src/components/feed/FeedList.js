import React from 'react'
import FeedSummary from './FeedSummary'

const FeedList=({feeds})=>{
	return (
		<div className="feed-list section">

		{feeds && feeds.map(feed =>{
			return(
				<FeedSummary feed={feed} key={feed.id} />
				)
		})
		}

		</div>
		)

}

export default FeedList