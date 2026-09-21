import { useState, type ReactNode } from "react";
import type { Tweet } from "../types/Tweet";


export type TweetPreviewProps = {
  tweet: Tweet;
};
export const TweetPreview = ({tweet} : TweetPreviewProps) : ReactNode => {
    const [isExpanded, setisExpanded] = useState(false); 
    return(
        
        <div>
            <h1>{tweet.authorName}</h1>
            <h2>@{tweet.authorHandle}</h2>
            <p>{tweet.createdAt}</p>
            {(tweet.image) && <img src={tweet.image.url} alt={tweet.image.alt} className="tweet-image" />}  
            {(isExpanded) ? <p>{tweet.content}</p>: <p>{tweet.content.slice(0, 180)}</p>}       
            {(tweet.content.length) > 180 &&  <button onClick={()=> setisExpanded(v => !v)}>{(isExpanded) ? "Voir mois" : "Voir plus"}</button>}
            
        </div>
    );
};

