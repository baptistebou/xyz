import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useContext } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const TweetsMasterPage = () => {
    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
     const filterTweets = tweets.filter((tweet) => !tweet.parentId);
    useDocumentTitle("Accueil")
    return (
        <main>  
            <TweetForm onSubmit={addTweet} />
            <TweetsList tweets={filterTweets} onToggleLike={toggleLike}/>
        </main>
    )
}