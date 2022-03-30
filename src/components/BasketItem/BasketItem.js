import React from 'react'
import './BasketItem.css'
import { useStateValue } from '../../Context/StateProvider'

function BasketItem({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div className='BasketProduct'>
      <img className='BasketProduct_image' src={image} />

      <div className='BasketProduct_info'>
        <p className='BasketProduct_title'>{title}</p>
        <p className='BasketProduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='BasketProduct_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  )
}
export default BasketItem
