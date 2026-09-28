import { TweetsList } from "../components/TweetsList"
import { initialTweets } from "../data/tweets"

export const TweetsMasterPage = () => {
    return (
        <main>
            <TweetsList tweets={initialTweets}/>
        </main>
    )
}