import React from 'react'
import Slider from 'infinite-react-carousel';
import {Button} from "antd";
import {Link} from "react-router-dom";

function Product_page_grocery() {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        duration: 1000,
        slidesToShow: 5,
        swipe: false
      };
    return (
        <div>
            <Link to="/mens-new">
            <img className='upper_image'  src='https://www.grocerysumo.com/media/slider/home/vh9oeys6_fruit-banner.png' alt=""></img>
            </Link>
            <Slider { ...settings }>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-01.jpg?alt=media&token=ebd0c430-d4f8-4d2d-855c-0f9e536e7449' alt=""></img>
          </div>
          <div>
            <img className='brand_logos'  src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-02.jpg?alt=media&token=41cb95de-0142-4031-bffe-92433715cce7' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-03.jpg?alt=media&token=0224ec9a-ab6d-49c8-ab44-0d6759a1daf5' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-04.jpg?alt=media&token=d6627e27-a0bd-4e97-b9ce-ce27f24fc525' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-05.jpg?alt=media&token=0e371fad-4428-42bb-af49-a2bfbbbd350e' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-06.jpg?alt=media&token=3808cd0d-0812-4554-b2ba-88a8fb2fde9f' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-07.jpg?alt=media&token=240c85e7-e390-428c-b5de-46b088fbf6ad' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-08.jpg?alt=media&token=bf882ef4-d673-458f-8ecb-c1e7e59c0b41' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/Brand%20logos%2FGrocery%20brands%20logo%2F1-09.jpg?alt=media&token=dfb7b91c-95c8-4bba-9162-1e27906d4191' alt=""></img>
          </div>
          
        </Slider>
       <div className='card_container'>
           
            
                <div className='row_elements'>
                <Link to="/fruits">
                    <div>

                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-10.png?alt=media&token=cf140fc7-313e-4c75-8d8d-e9a567e2374c'></img>
                    <h1 className='row_title'>Fruits and vegetables</h1>
                    
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    
                    </div>
                    </Link>
                    
                </div>
                <div className='row_elements'>
                <Link to="/fruits">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-11.jpg?alt=media&token=5890a276-dd8b-4419-ac81-5f49cc4c4a2d'></img>
                    <h1 className='row_title'>Meet and Fish</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="fruits">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-12.jpg?alt=media&token=0775c12d-c51b-4f3a-9024-51113f371f71'></img>
                    <h1 className='row_title'>Cooking</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                    </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/vegetables">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-13.jpg?alt=media&token=0634fe53-e3ea-4e91-bf19-f79c3208b426'></img>
                    <h1 className='row_title'>Food</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
            
           
                <div className='row_elements'>
                <Link to="/vegetables">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-17.jpg?alt=media&token=eeefa44f-bab3-4e67-a601-7c4216848cd8'></img>
                    <h1 className='row_title'>Beverage</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/vegetables">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-16.jpg?alt=media&token=a557aa84-8da7-4a09-b1db-8b0025897007'></img>
                    <h1 className='row_title'>Cleaning Supplies</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/fruits">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-15.jpg?alt=media&token=1b6ceb25-58c9-4520-b9f5-9e033c53e5c2'></img>
                    <h1 className='row_title'>Personal care</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/vegetables">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-14.jpg?alt=media&token=7630ff57-ea05-442f-8531-033458c37482'></img>
                    <h1 className='row_title'>Baby Care</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                <div className='row_elements'>
                <Link to="/vegetables">
                    <div>
                    <img className='row_images' src='https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Fgrocery-homepage-images%2F1-18.jpg?alt=media&token=92c065f3-bbc1-4fce-b1e3-3fce1fd7a75c'></img>
                    <h1 className='row_title'>Pet Supplies</h1>
                    <Button className='shop_button'  type="primary" primary size="medium" >Shop Now</Button>
                </div>
                </Link>
                </div>
                
            
            </div>
            
            
        </div>
        
    )
}

export default Product_page_grocery
