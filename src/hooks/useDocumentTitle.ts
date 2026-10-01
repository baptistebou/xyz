import { useEffect } from "react";

export const useDocumentTitle = (titre : string) => {
    useEffect(()=> {
        document.title = titre
    }, [titre])
}