import Search from '@mui/icons-material/Search';
import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_searchIcon'/>
        <input placeholder='キーワード検索' type='text'/>
      </div>
      <div className='widgets_widgetContainer'>
        <h2>いまどうしてる？</h2>

        {/* ライブラリーを追加・追記 */}
        <TwitterTweetEmbed tweetId={'1504023148848889856'}/>

        <TwitterTimelineEmbed 
          sourceType='profile' 
          screenName='WEi__Official' 
          options={{ height:400 }} 
        />

        <TwitterShareButton 
          url={'https://twitter.com/WEi__Official'}
          options={{ text: '#WEi', via: 'WEi__Official'}}
        />
      </div>
    </div>
  )
};

export default Widgets;