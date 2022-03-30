import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../../firebase';
import { useStateValue } from '../../Context/StateProvider';
import Order from './Order/Order';
function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState();
  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className='orders'>
      <h2>Order</h2>{' '}
      <div>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
