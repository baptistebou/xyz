import { useState, type ReactNode } from "react";
import type { Tweet } from "../types/Tweet";
import { Link } from "react-router-dom";


export type TweetPreviewProps = {
  tweet: Tweet;
  onToggleLike: (id: string) => void;
};
export const TweetPreview = ({tweet, onToggleLike} : TweetPreviewProps) : ReactNode => {
    const [isExpanded, setisExpanded] = useState(false); 
    return(
        
        <div>               
            <h1>{tweet.authorName}</h1>
            <h2>@{tweet.authorHandle}</h2>  
            <p>{tweet.createdAt}</p>
            {(tweet.image) && <Link to={`/tweets/${tweet.id}`}><img src={tweet.image.url} alt={tweet.image.alt} className="tweet-image" /></Link>}  
            {(isExpanded) ? <p>{tweet.content}</p>: <p>{tweet.content.slice(0, 180)}</p>}       
            {(tweet.content.length) > 180 &&  <button onClick={()=> setisExpanded(v => !v)}>{(isExpanded) ? "Voir moins" : "Voir plus"}</button>}
            <span>{tweet.likes}</span>
            <button onClick={() => onToggleLike(tweet.id)}>{tweet.likedByMe ? "Je n'aime plus" : "J'aime"}</button>
            <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>     
        </div>
    );
};

