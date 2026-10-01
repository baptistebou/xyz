import { Link } from "react-router-dom"
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const NotFoundPage = () => {
    useDocumentTitle("Page introuvable")
    return (
        <main>
            <p>Page introuvable</p>
            <Link to="/">Retour à l'accueil</Link>
        </main>
    )
}