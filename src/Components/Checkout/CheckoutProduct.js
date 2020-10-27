import React,{useState} from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../Reducer/StateProvider";
import ClearIcon from "@material-ui/icons/Clear";
import { Button, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";


function CheckoutProduct({ id, image, title, price,rating,hideButton,}) {
  
  const [{basket}, dispatch] = useStateValue();
  // const [] = React.useState(null);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        price: price,
        title: title,
        image: image,
      },
    });
  };
 
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>৳</small>
          <strong>{price}</strong>
        </p>
        
       
        {!hideButton && (
          <>
          <Tooltip title="Decrease quantity">
          <Button 
          
            type="dashed"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={removeFromBasket}
          />
        </Tooltip>
          <Tooltip title="Increase quantity">
          <Button
          
            type="dashed"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={addToBasket}
          />
        </Tooltip>
        
        </>
        )}
      </div>

      
    </div>
  );
}

export default CheckoutProduct;