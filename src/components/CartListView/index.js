import CartItem from '../CartItem'
import './index.css'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../../slice/cartSlice'


const CartListView = () => {
  const cartList = useSelector(selectAllCart)
  return (
    <ul className="cart-list">
      {cartList.map((eachCartItem) => {
        return (
          <CartItem cartItemDetails={eachCartItem} />)
      })}
    </ul>
  )

}

export default CartListView
