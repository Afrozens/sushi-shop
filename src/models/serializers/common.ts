export interface Address {
    city: string | null
    address: string | null
    address2: string | null
}

export interface Phone {
    phone: string | null
    type?: string | null
}

export interface SocialMedia {
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
}

export interface OrderGateway {
    name: string
    reference: string
    invoice_id: string
    discount_code?: string
    date: Date
}