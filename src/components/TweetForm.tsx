import { useState } from "react";

type TweetFormProps = {
    onSubmit: (content: string) => void;
};

const CONTENT_MAX_LENGTH = 280;

export const TweetForm = ({ onSubmit }: TweetFormProps) => {
    const [content, setContent] = useState<string>("");

    const remainingCharacters = CONTENT_MAX_LENGTH - content.length;
    const trimmedContent = content.trim();
    const isSubmitDisabled = trimmedContent.length === 0 || trimmedContent.length > CONTENT_MAX_LENGTH;

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        onSubmit(trimmedContent);
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <p>{remainingCharacters} caractères restants</p>
            <button type="submit" disabled={isSubmitDisabled}>
                Publier
            </button>
        </form>
    );
};    
    

    