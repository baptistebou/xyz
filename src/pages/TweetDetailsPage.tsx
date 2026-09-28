import { useParams, Link } from "react-router-dom"
import { initialTweets } from "../data/tweets"
import { TweetPreview } from "../components/TweetPreview"
import { TweetsList } from "../components/TweetsList"


export const TweetDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const tweet = initialTweets.find(tweet => tweet.id === id)
    const tweetParent = initialTweets.filter(tweet => tweet.parentId === id)
    if (!tweet){
        return (
            <div>
                <p> Ce tweet n'existe pas</p>               
                <Link to="/">Retour à l'accueil</Link>
            </div>
        )
    }
    return (
        <div>
            <TweetPreview tweet={tweet} />
            {(tweetParent) ? <TweetsList tweets={tweetParent} /> : <p> Il n'y a pas de réponse</p>}
        </div>
    )
}