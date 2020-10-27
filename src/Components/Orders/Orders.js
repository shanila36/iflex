import React, { useState, useEffect } from 'react';
import {db} from "../../firebase"
import './Orders.css'
import {useStateValue} from "../Reducer/StateProvider"
import Order from "./Order"

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [orders_cod, setOrders_cod] = useState([]);
useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        db
        .collection('users_cash_on_delivery')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders_cod(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        
    } else {
        setOrders_cod([])
    }

  }, [user])
  
  

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders_cod?.map(order=> (
                        <Order order={order}></Order>
                ))}    
                {orders?.map(order=> (
                    <Order order={order}></Order>
            ))}    
            </div>

            
        </div>
    )
}

export default Orders