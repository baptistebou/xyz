import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <main>
            Page introuvable
            <Link to="/">Retour à l'accueil</Link>
        </main>
    )
}