import { useState, type ReactNode } from "react";
import type { Tweet } from "../types/Tweet";
import { Link } from "react-router-dom";
import './TweetPreview.css'

export type TweetPreviewProps = {
  tweet: Tweet;
  onToggleLike: (id: string) => void;
};
export const TweetPreview = ({tweet, onToggleLike} : TweetPreviewProps) : ReactNode => {
    const [isExpanded, setisExpanded] = useState(false);
    const formattedDate = new Date(tweet.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    }); 
    return(
        
        <div>                
            <h1>{tweet.authorName}</h1>
            <h2>@{tweet.authorHandle}</h2>  
            <p>{formattedDate}</p>
            {(tweet.image) && <Link to={`/tweets/${tweet.id}`}><img src={tweet.image.url} alt={tweet.image.alt} className="tweet-image" /></Link>}  
            {(isExpanded) ? <p>{tweet.content}</p>: <p>{tweet.content.slice(0, 180)}</p>}       
            {(tweet.content.length) > 180 &&  <button onClick={()=> setisExpanded(v => !v)}>{(isExpanded) ? "Voir moins" : "Voir plus"}</button>}
            <br />
            <span>{tweet.likes}  </span>
            <button onClick={() => onToggleLike(tweet.id)} className="jaime">{tweet.likedByMe ? "Je n'aime plus" : "J'aime"}</button>
            <br />
            <Link to={`/tweets/${tweet.id}`}>Voir la discussion</Link>     
        </div>
    );
};

