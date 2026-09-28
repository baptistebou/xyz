export type Tweet = {
    id : string; 
    authorName : string; 
    authorHandle : string; 
    content : string; 
    image? : TweetImage; 
    createdAt : string;
    parentId?: string
};
export type TweetImage = {
    url : string; 
    alt : string
};
