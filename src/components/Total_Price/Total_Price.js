import React, { useEffect } from 'react'
import './Total_Price.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../Context/StateProvider'
import { getBasketTotal } from '../../Context/reducer'
import { useNavigate } from 'react-router-dom'
function Total_Price() {
  const [{ basket }, dispatch] = useStateValue()
  const amount = 0
  const navigate = useNavigate()
  return (
    <div className='Total_Price'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total Items {basket?.length}: $ <strong>{value}</strong>
            </p>
            <small className='Total_Price_gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Total_Price
