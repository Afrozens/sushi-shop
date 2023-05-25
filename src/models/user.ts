import { Address, OrderGateway, Phone, SocialMedia } from "./serializers/common"

export type Role = "USER" | "ADMIN" | "DEV"

export interface User {
    uid: string
    id_token: string
    firstName: string
    lastName: string
    email: string
    rol: Role
    historyPayment?: OrderGateway[]
    historyFavorite?: UserFavorite[]
    avatar?: string
    address?: Address | null
    phone?: Phone | null
    socialMedia?: SocialMedia | null
    subscribe?: boolean
    status?: boolean
}

export interface UserFavorite {
    user_id: string
    sushi_id: string | number
    isFavorite: boolean
}