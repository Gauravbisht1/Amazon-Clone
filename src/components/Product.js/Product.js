import React from 'react'
import './Product.css'
import { useStateValue } from '../../Context/StateProvider'

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div
          className='product-rating'
          style={{
            color: 'yellow',
            fontWeight: 'bold',
          }}
        >
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product
