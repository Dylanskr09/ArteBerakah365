export type ID = string

export interface Collection {
  id: ID
  slug: string
  name: string
  tagline?: string
  description?: string
}

export interface Product {
  id: ID
  name: string
  sku: string
  price: number
  collectionId: ID
  image: string
  short?: string
  tags?: string[]
}
