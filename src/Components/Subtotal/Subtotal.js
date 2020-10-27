import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../Reducer/StateProvider";
import {getBasketTotal} from "../Reducer/reducer";
import {Link, useHistory} from "react-router-dom";
import {db} from "../../firebase"
function Subtotal() {
  const history=useHistory();
  const [{basket,user},dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='subtotal_text'>
              Subtotal ({basket.length} items):
              <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}      
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"৳"}
      />
         
      <button onClick={e=> history.push("/payment")}>Proceed to Checkout</button>
      
    </div>
  );
}

export default Subtotal;
