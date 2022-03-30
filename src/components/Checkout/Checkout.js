import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import BasketItem from '../BasketItem/BasketItem';
import Total_Price from '../Total_Price/Total_Price';
import './Checkout.css';
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkoutLeft'>
        <img
          className='checkoutAd'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkoutTitle'>Your Shoping Basket</h2>
          {basket.map((item) => (
            <BasketItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkoutRight'>
        <Total_Price />
      </div>
    </div>
  );
}

export default Checkout;
