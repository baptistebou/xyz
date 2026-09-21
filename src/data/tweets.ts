import type { Tweet} from "../types/Tweet";
import { tweetsImages } from "./tweetsImages";

export const initialTweets : Array<Tweet> = [
    {id : "UU01", authorName : "Max", authorHandle : "Max1", content : "Tomber dans les pommes", image : tweetsImages[0], createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU02", authorName : "Math", authorHandle : "Math1", content : "Poser un lapin", image : tweetsImages[1], createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU03", authorName : "Louise", authorHandle : "Louise1", content : "Avoir le cœur sur la main ", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU04", authorName : "Jade", authorHandle : "Jade1", content : "Avoir la flemme", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU05", authorName : "Alma", authorHandle : "Alma1", content : "Avoir le vent au poupe", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU06", authorName : "Ambre", authorHandle : "Ambre1", content : "Mettre la main à la pâte", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU07", authorName : "Alba", authorHandle : "Alba", content : "Pédaler dans la semoule ", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU08", authorName : "Zouyang", authorHandle : "BO", content : "Avoir les yeux plus gros que le ventre", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU09", authorName : "Kim", authorHandle : "Canna", content : "Être dans de beaux draps", createdAt : "2026-07-02T09:12:50.000Z"},
    {id : "UU10", authorName : "Caliste", authorHandle : "Caliste1", content : "Avance à ton rythme. Les petits progrès finissent par créer de grands changements. Ne cherche pas la perfection : reste constant, garde confiance et continue, un jour à la fois.!!! c'est fou ", createdAt : "2026-07-02T09:12:50.000Z"}
];
