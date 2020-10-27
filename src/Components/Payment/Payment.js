import React,{useState,useEffect} from 'react'
import './Payment.css'
import {useStateValue} from "../Reducer/StateProvider"
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link,useHistory } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "../Reducer/reducer";
import axios from "axios"
import {db} from "../../firebase"
import { Input } from "antd";
function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const stripe =useStripe()
    const elements=useElements()
    const [succeeded,setSucceeded] = useState(false)
    const [Processing, setProcessing] = useState("")
    const [error,setError] = useState(null)
    const [disabled,setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    const history=useHistory()
    const [address,setAddress] = useState()
    const [name,setName] = useState()
    const [phone,setPhone] = useState()
    var date=new Date()
    useEffect(() => {
       const getClientSecret = async() => {
            const response=await axios( {
                method: "post",
                url: `http://localhost:5001/iflexmart/us-central1/api/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
       }
       getClientSecret()
    }, [basket])
    console.log("the secret is>>> ", clientSecret)
    const handleSubmit = async(event) => {
        event.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret,
        {
            payment_method: {
            card: elements.getElement(CardElement)
        }}
        ).then(({paymentIntent}) => {
            db.
            collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({ 
                basket:basket,
                amount:paymentIntent.amount/100,
                created:date,
                name:name,
                phone:phone,
                address:address                
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({ 
                type: "EMPTY_BASKET"
            })
            history.replace("/orders")
        })
    }
    const handleCashSubmit = async(event) => {
        event.preventDefault()
        
        db.
        collection("users_cash_on_delivery")
        .doc(user?.uid)
        .collection("orders")
        .doc()
        .set({ 
            basket:basket,
            amount:getBasketTotal(basket),
            created:date, 
            name:name,
            phone:phone,
            address:address,
                           
        })
        dispatch({ 
            type: "EMPTY_BASKET"
        })
            history.replace("/orders")
    
        
    }
    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }
    return (
        <div className="payment">
            <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items
                </Link>)    
            </h1>
                <div className="payment__section_ad">
                    <div className="payment__title">
                    <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <div classname="info">
                        <h3>Your Name</h3>
                        <Input className='input_field' onChange={(e) => setName(e.target.value)}></Input>
                        </div>
                        <div classname="info">
                        <h3>Phone Number</h3>
                        <Input className='input_field' onChange={(e) => setPhone(e.target.value)}></Input>
                        </div>
                        <div classname="info">
                        <h3>Full Address</h3>
                        <Input className='input_field' onChange={(e) => setAddress(e.target.value)}></Input>
                        </div>
                    </div>
                </div>
            
            <div className="payment__section">
            <div className="payment__title">
                    <h3>Review Items & Delivery</h3>
                    </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}>
                        </CheckoutProduct>
                    ))}
                </div>
            </div>

            <div className="payment__section">
            <div className="payment__title">
                    <h3>Payment Method(card)</h3>
                    </div>
                <div className="payment__details">
                {/*Stripe*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}></CardElement>    
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText= {(value) => (
                                   
                                    <h3>Order Total: {value}</h3>
                                    
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"৳"}
                                    />
                                    <button disabled={Processing || disabled || succeeded}>
                                    <span>{Processing? <p>Processing</p> :
                                        "Buy Now"}</span>
                                    </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    
                </div>
            </div>
            <div className="payment__section">
            <div className="payment__title">
                    <h3>Payment Method(Cash on Delivery)</h3>
                    </div>
                <div className="payment__details">
                {/*Stripe*/}  
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText= {(value) => (
                                   
                                    <h3>Order Total: {value}</h3>
                                    
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"৳"}
                                    />
                                    <button onClick={handleCashSubmit}>
                                    Buy Now
                                    </button>
                            </div>
                            
                       
                    
                </div>
            </div>
            
            </div>
        </div>
    )
}

export default Payment
