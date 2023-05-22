import React,{useState, useEffect } from 'react';
import tumblrIcon from './tumblr.svg';
import twitterIcon from './twitter.svg';


function Quote() {

    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');

    useEffect(()=>{
      getQuote();
    },[])

    const getQuote = () => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res => res.json())
        .then(data => {
         let dataQuote = data.quotes;
         console.log(dataQuote);
         let randomNum = Math.floor(Math.random()*dataQuote.length);
         let randomQuote = dataQuote[randomNum];
        
         setQuote(randomQuote.quote);
         setAuthor(randomQuote.author);
        })
    }

    const handleClick = () => {
        getQuote();
    }


  return (
    <div id="quote-box">
    <div id="text"><p>{quote}</p></div>
    <div id="author"><p>{author}</p></div>

    <div id="buttons">
    <div className="social-media">
    <a href="#" id="tumlr-quote">
    <span><img src={tumblrIcon} alt="tumb" /></span>
    </a>
    <a href="#" id="twet-quote">
    <span><img src={twitterIcon} alt="twitt" /></span>
    </a>
    </div>
    <button onClick={handleClick} id="new-quote">New Quote</button>
    </div>
    </div>
  )
}

export default Quote