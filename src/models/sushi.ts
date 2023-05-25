import { Review } from "./review"

export interface Sushi {
    sushi_id: string | number
    name: string
    description: string
    price: number
    image: string
    isThere: boolean
    historyReview: Review[]
}