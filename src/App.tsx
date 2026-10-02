import './App.css'
import { Outlet } from 'react-router-dom'
import { initialTweets } from './data/tweets';
import type { Tweet } from './types/Tweet';
import { useState } from 'react';
import type { TweetsContextValue} from './contexts/TweetsContext';
import { TweetsContext } from './contexts/TweetsContext';
import { Link } from 'react-router-dom';



function App() {
    const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);
    
    function addTweet(content: string): void {
    setTweets((tweet) => {
        const newTweet: Tweet = {
            id: crypto.randomUUID(),
            authorName: "Vous",
            authorHandle: "vous",
            content: content,
            createdAt: new Date().toISOString(),
            likes: 0,
            likedByMe: false,
        };
        return [newTweet, ...tweet];
    });
}
    function toggleLike(id: string): void {
    setTweets((modifTweets) =>
        modifTweets.map((tweet) => {
            if (tweet.id !== id) {
                return tweet; 
            }
            return {...tweet, likedByMe: !tweet.likedByMe, likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1};
        })
    );
}
    const context: TweetsContextValue = { tweets, addTweet, toggleLike };
    return (
        <>
            <header>
                <img src="/assets/xyz.png" alt="icone de l'application" className='XYZ-Logo'/>
                <h1> XYZ </h1> 
                <nav>
                    <Link to="/">Accueil</Link>
                </nav>
            </header>
            <TweetsContext.Provider value={context} >
                <Outlet />
            </TweetsContext.Provider>
            
        </>
    )
}


export default App