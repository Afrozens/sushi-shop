export type Score = "20%" | "40%" | "60%" | "80%" | "100%" 

export interface Review {
    user_id: string
    comment: string
    score: Score
}