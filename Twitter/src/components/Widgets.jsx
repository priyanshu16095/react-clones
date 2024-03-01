import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
      
      <div className="widgetsInput">
        <SearchIcon />
        <input type="text" placeholder='Search' />
      </div>

      <div className="widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={'933354946111705097'} />
        <TwitterTimelineEmbed sourceType="profile" screenName="saurabhnemade" options={{height: 400}} />
      </div>

    </div>
  )
}

export default Widgets
