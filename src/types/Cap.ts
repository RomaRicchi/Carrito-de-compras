export type Cap = {
  id: number
  name: string
  image: string
  description: string
  price: number
}
export type CartItem = Cap & {
    quantity: number
}