import * as Core from '@commerce/types'
import { CheckoutLineItem } from './schema'

export type ShopifyCheckout = {
  id: string
  webUrl: string
  lineItems: CheckoutLineItem[]
}

export type Cart = Core.Cart & {
  lineItems: LineItem[]
}
export interface LineItem extends Core.LineItem {
  options?: any[]
}

/**
 * Cart mutations
 */

export type OptionSelections = {
  option_id: number
  option_value: number | string
}

export type CartItemBody = Core.CartItemBody & {
  productId: string // The product id is always required for BC
  optionSelections?: OptionSelections
}

export type Customer = {
  acceptsMarketing: boolean
  addresse: any
  createdAt: string
  defaultAddress: any
  displayName: string
  email: string
  firstName: String
  id: string
  lastIncompleteCheckout: any
  lastName: string
  orders: any
  phone: string
  tags: string[]
}

export type GetCartHandlerBody = Core.GetCartHandlerBody

export type AddCartItemBody = Core.AddCartItemBody<CartItemBody>

export type AddCartItemHandlerBody = Core.AddCartItemHandlerBody<CartItemBody>

export type UpdateCartItemBody = Core.UpdateCartItemBody<CartItemBody>

export type UpdateCartItemHandlerBody = Core.UpdateCartItemHandlerBody<CartItemBody>

export type RemoveCartItemBody = Core.RemoveCartItemBody

export type RemoveCartItemHandlerBody = Core.RemoveCartItemHandlerBody
