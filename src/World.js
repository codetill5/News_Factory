import React, { useEffect, useState } from 'react';
import "./Sass/main.css";
import ContentOne from './assets/images/contentOne.jpg';
import Center from './assets/images/center.jpg';
import axios from 'axios';


const World = ()=>{
    const[leftOneHead, setLeftOneHead] = useState([]);
    const[leftOnePara, setLeftOnePara] = useState();
    const[leftOneLink, setLeftOneLink] = useState();
    const[leftOneImg, setLeftOneImg] = useState();

  
    useEffect(()=>{
        async function getColumns(){
            const reso = await axios.get('https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/2021/1.json?api-key=umwgfENmrwzSaur85AVKlKBrKnV5Jfdo');
           let headData = reso.data.response.docs;
           let item = headData[Math.floor(Math.random() * headData.length)];
        //    let itemTwo = headData[Math.floor(Math.random() * headData.length+1)];
        //    let itemThree = headData[Math.floor(Math.random() * headData.length+2)];

        //    console.log(item);
        //    let mult = item.multimedia;
        //    console.log(mult[3].url);
          if(item.section_name === "World"){
              setLeftOneHead(item.headline.main);
              setLeftOnePara(item.abstract);
              setLeftOneLink(item.web_url);
              let imgLink = item.multimedia[2].url;
              let link2 = "http://www.nytimes.com/"
              let linke = link2.concat(imgLink);
            //   console.log(linke);
            setLeftOneImg(linke);


            // setRightOneHead(itemTwo.headline.main);
            // setRightOnePara(itemTwo.abstract);
            // setRightOneLink(itemTwo.web_url);
            // setRightOneImg(itemTwo.linke);

          }

        }
        getColumns();
    });
    return(
        <>
       <div className="newContainer">
           
            <div className="leftContentOne">
            <hr/>
            <h1>{leftOneHead || 'The Great Kate'}</h1>
                <p>{leftOnePara || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</p>
                <img src={leftOneImg || ContentOne} alt="img" />
                <a href={leftOneLink}>Read More &rarr;</a>
                
            </div>
            <hr/>
            {/* <div className="RightContentOne">
            <hr/>
                <h1>{rightOneHead || 'The Great Kate'}</h1>
                <p>{rightOnePara || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</p>
                <img src={rightOneImg || ContentOne} />
                <a href={rightOneLink}>Read More &rarr;</a>
                
            </div> */}
           
        <div className="centerContent">
                    <img src={Center} />
                    <h2>Featured</h2>
                    <h1>Bette and Jones Writer are Working on a Vivien leight Biopic</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                   
        </div>

        <div className="leftContentTwo">
            <hr/>
                <h1>The Great Kate</h1> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                <img src={ContentOne}/>
                 <a href="#">Read More &rarr;</a>
                
            </div>

            {/* <div className="RightContentTwo">
            <hr/>
                <h1>The Great Kate</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src={ContentOne} />
                <a href="#">Read More &rarr;</a>
                <hr/>
            </div> */}


       </div>
        </>
    );
};



export default World;