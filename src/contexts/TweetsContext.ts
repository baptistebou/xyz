import type { Tweet } from "../types/Tweet";
import { createContext } from "react";


export type TweetsContextValue = {
 tweets: Array<Tweet>;
 addTweet: (content: string) => void;
 toggleLike(id: string): void; 
};
export const TweetsContext = createContext<TweetsContextValue | undefined>(
 undefined,
);