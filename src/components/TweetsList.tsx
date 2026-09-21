import type { ReactNode } from "react";
import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";

export type TweetsListProps = {tweets : Array<Tweet>};


export const TweetsList = ({tweets} : TweetsListProps) : ReactNode => {
    return (
    <>
      {tweets.map(tweet => (
        <TweetPreview tweet={tweet} key={tweet.id} />
      ))}
    </>
    );
};