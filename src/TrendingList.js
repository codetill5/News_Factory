import React, { useEffect, useState } from 'react';
import './Sass/main.css';
import axios from 'axios';

const TrendingList = ()=>{
    const[channel, setChannel] = useState();
    const[channelTwo, setChannelTwo] = useState();
    const[channelThree, setChannelThree] = useState();

    useEffect(()=>{
        async function getNews(){
            const resource = await axios.get('https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/2021/1.json?api-key=umwgfENmrwzSaur85AVKlKBrKnV5Jfdo');
            // console.log(resource.data.response.docs[0].headline.main);
            console.log(resource.data.response.docs);

            setChannel(resource.data.response.docs[0].snippet);
            setChannelTwo(resource.data.response.docs[1].snippet);
            setChannelThree(resource.data.response.docs[6].snippet);
            
        }
        getNews();
    })

    return(
        <>
        <br/>
        {/* <div className="container">
        <hr/>
            <div className="marqContainer">
           
               
              
            </div>
            <hr/>
        </div> */}
      

        <div id="breaking-news-container">
  <div id="breaking-news-colour" class="slideup animated">
    
  </div>  
   <span class="breaking-news-title delay-animated slidein">
      // BREAKING //
    </span> 
  
         <a class="breaking-news-headline delay-animated2 fadein marquee" ><p className="channelOne">{channel} | </p></a>  
         <a class="breaking-news-headline delay-animated2 fadein marquee" ><p className="channelTwo">{channelTwo} |</p></a>  
         <a class="breaking-news-headline delay-animated2 fadein marquee" ><p className="channelThree">{channelThree} |</p></a>  
              
              
  
  
</div>  
        </>
    );
};

 export default TrendingList;