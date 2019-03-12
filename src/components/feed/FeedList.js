import React from 'react'
import FeedSummary from './FeedSummary'
import FeedDetails from './FeedDetails'
import { Link } from 'react-router-dom'

const FeedList=({feeds})=>{
	return (
		<div className="feed-list section">

		{feeds && feeds.map(feed =>{
			return(
				<Link to={'/feed/'+feed.id} >
				<FeedDetails feed={feed} key={feed.id} />
				</Link>
				)
		})
		}

		</div>
		)

}

export default FeedList