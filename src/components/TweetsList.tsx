import type { ReactNode } from "react";
import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type TweetsListProps = {
    tweets : Array<Tweet>;
    onToggleLike: (id: string) => void;
}


export const TweetsList = ({tweets, onToggleLike} : TweetsListProps) : ReactNode => {
    return (
    <div>
      {tweets.map((tweet) => (
        <TweetPreview tweet={tweet} key={tweet.id} onToggleLike={onToggleLike}/>
      ))}
    </div>
    );
};