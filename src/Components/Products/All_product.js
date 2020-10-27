import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./All_Product_page.css";

let list = require('./product_list.json')

function All_product(props) {
  // const [] = useStateValue();
  const [product, setProduct] = useState(list);
  useEffect(() => {
    if (props.searchValue!=" "
    &&props.searchValue!="  "
    &&props.searchValue!="   "
    &&props.searchValue!="    "
    &&props.searchValue!="     "
    &&props.searchValue!="      "
    &&props.searchValue!="       "
    &&props.searchValue!="        "
    &&props.searchValue!="         "
    &&props.searchValue!="          "
    &&props.searchValue!="           ") {
      setProduct([])
      list
        .filter(
          (prod) =>
            prod.title.toLocaleLowerCase().startsWith(
            props.searchValue.toLocaleLowerCase()||
            props.searchValue)||prod.title.toLocaleLowerCase().includes(
              props.searchValue.toLocaleLowerCase()||
              props.searchValue)
        )   
        
        .map((data) => {
          setProduct((prevData) => [...prevData, data]);
        });
        
        
    } else {
      setProduct(list);
    }
  }, [props.searchValue]);
  return (
    
       <>
       <div className='search_result'>You searced for : {props.searchValue}</div>
        <div className="home__row">
          {product.map((data, index) => (
            <Product
              key={index}
              id={data.id}
              title={data.title}
              price={data.price}
              image={data.image}
              rating={data.rating}
              />
              
          ))}
          
      
    </div>
    </>
  );
}

export default All_product;