import { useParams, Link } from "react-router-dom"
import { TweetPreview } from "../components/TweetPreview"
import { TweetsList } from "../components/TweetsList"
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";


export const TweetDetailsPage = () => {
    const { tweets, toggleLike } = useContext(TweetsContext)!;
    const { id } = useParams<{ id: string }>()
    const tweet = tweets.find(tweet => tweet.id === id)
    const tweetParent = tweets.filter(tweet => tweet.parentId === id)
    useDocumentTitle(tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable")

    if (!tweet){
        return (
            <div>
                <p> Ce tweet n'existe pas</p>               
                <Link to="/" className="retour"> Retour à l'accueil</Link>
            </div>
        )
    }
    return (       
        <div>
            <TweetPreview tweet={tweet} onToggleLike={toggleLike}/>
            {tweetParent.length > 0 ? (<TweetsList tweets={tweetParent} onToggleLike={toggleLike} />) : (<p> Il n'y a pas de réponse</p>) }
            <Link to="/" className="retour"> Retour à l'accueil</Link>
        </div>
    )
}