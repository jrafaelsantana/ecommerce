'use strict'

const OrderItemHook = (exports = module.exports = {})
const Product = use('AppqModels/Product')

OrderItemHook.method = async model => {
  let product = await Product.find(model.product_id)
  model.subtotal = model.quantity * product.price
}
