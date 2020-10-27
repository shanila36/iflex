import React from 'react';
import Slider from 'infinite-react-carousel';
import Product from "../Products/Product";
import './HomePage.css'
import {Product_page_mens_new} from "../Products/Product_page"

function HomePage() {
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
            <img className='first_image' src='https://i.ibb.co/q9NNvC0/HNH-banner.jpg' alt=""></img>
            <img className='second_image' src='https://i.ibb.co/k46Sck8/ADS-Google-Large-Leaderboard-970x90px.png' alt=""></img>
            <div>
        <Slider { ...settings }>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2857656/6ec7a754626cf3e7ddbf0c75a608ffa6/lipsy-data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos'  src='https://www.next.co.uk/nxtcms/resource/blob/2828464/791dc5980d69efea320b2f69a4d584af/superdry-data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2858366/ca9cd410c651d34580439c3d20603558/regatta--1--data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2839894/d0c3606ed1d9b70e54151c21dc6e5fbe/f-and-f-bw-data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2839896/ac3d60aee701d447e3a89c8cafb9b78d/fatface-01-c-data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2849038/b729676335b96f3dcc077677eecbbf72/levis-data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/3580202/6100a2485fb3f87031ba694586096c2f/aramni-beautyartboard-1-data.jpg' alt=""></img>
          </div>
          <div>
            <img className='brand_logos' src='https://www.next.co.uk/nxtcms/resource/blob/2828458/5a8f61a99d2de8697cf896cea552808f/-0008-nike-black-data.jpg' alt=""></img>
          </div>
          
        </Slider>
      </div>
      <div className="product_header_title">Latest Products</div>
      <div className="home__rows" >
          <Product
            id="0001"
            title="Khaki Zip Neck Fleece"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75"
            rating={5}
          />
          <Product 
            id="0002"
            title="
            Brushed Flannel Check Long Sleeve Shirt"
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F265210.jpg?alt=media&token=0265a3cf-4c06-4bee-a32d-ed8c0f56a35b"
            rating={5}
          />
          <Product
            id="0003"
            title="Brown Faux Shearling Flight Jacket"
            price={375}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F291558.jpg?alt=media&token=c4db1e73-f7b0-4ccd-974b-9a56a1c02831"
            rating={5}
          />
          <Product
            id="0004"
            title="Check Cosy Cuffed Pyjama Set"
            price={2500}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F583408.jpg?alt=media&token=66558eb9-baaf-4b99-88ce-7609ba8dbe9d"
            rating={5}
          />
          
           </div>
        
          
        <div >
          <img className='fourth_images' src='https://i.ibb.co/N1sN5HP/GA-19-FASHION-SALE-Large-Leaderboard.jpg' alt=""></img>
        </div>
        <div className="product_header_title">Why Choose Us?</div>
        <div className="love_pics">
          <div className="love_images">
            <img
              src="https://i.ibb.co/NrzPGJD/5f954a050e7bd.jpg"
              width="100%"
            ></img>
            <div className="love_images_text1">
              <div className="love_images_text_header">Stylish And Elegant</div>
              <p className="love_images_text_body">
              Celebrating elegance with these classy outfits. Some are formal, with velvet dresses and others more chic with leather skirts.
              </p>
            </div>
          </div>
          <div className="love_images">
            <img
              src="https://i.ibb.co/BGVGF9c/sale-shopping-consumerism-and-people-concept-woman-with-food-basket-at-grocery-store-or-supermarket.jpg"
              width="100%"
            ></img>
            <div className="love_images_text2">
              <div className="love_images_text_header">Fresh Grocery Shopping</div>
              <p className="love_images_text_body">
              Order fresh produce, prepared food & all your grocery essentials for delivery as quickly as today!
              </p>
            </div>
          </div>
          <div className="love_images">
            <img
              src="https://i.ibb.co/nMPML7j/5f954a75caf5a.jpg"
              width="100%"
            ></img>
            <div className="love_images_text3">
              <div className="love_images_text_header">Modern Fashion For All</div>
              <p className="love_images_text_body">
              Discover the latest in Men's fashion and new season trends at O2 Shopping
              </p>
            </div>
          </div>
        </div>
        <div className="product_header_title">Mens Collection</div>
        <div className="home__rows" >
        <Product
        id="0005"
        title="Smart Dark Blue Straight Fit Jeans"
        price={1400}
        image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F648732.jpg?alt=media&token=d15e452e-38b0-4719-96a5-e124b449c530"
        rating={4}
      />
      <Product
        id="0006"
        title="Navy Matching Family Mens"
        price={450}
        image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F820153.jpg?alt=media&token=561fcb2c-ab5b-4612-8cec-0c07a50a3e68"
        rating={4}
      />
    
    
      <Product
        id="0007"
        title="Navy Borg Lined Dressing Gown"
        price={72000}
        image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F947688.jpg?alt=media&token=c9c5554b-a7e6-44ae-8192-9b26c76d19dc"
        rating={4}
      />
      <Product
        id="0008"
        title="Navy Chest Stripe Pyjama Set"
        price={150}
        image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F953225.jpg?alt=media&token=60f75a78-821f-4875-aa1d-87e6f0a09c27"
        rating={4}
      />
      <Product
        id="0009"
        title="Charcoal Cable Knit Jumper"
        price={250}
        image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F990630.jpg?alt=media&token=7f9fe847-5d48-497c-a3a6-6ff90b468658"
        rating={4}
      />
          
           </div>
           <div className="product_header_title">Womens Collection</div>
           <div className="home__rows" >
           <Product
            id="0001"
            title="Animal Dolman V-Neck Jumper"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F854461.jpg?alt=media&token=4132c6f1-6868-4e91-bcae-c09dadece319"
            rating={5}
          />
          <Product
            id="0002"
            title="
            Dark Blue Power Stretch Denim "
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F228058.jpg?alt=media&token=64a8b160-bb3d-476f-bef7-acde4fe80ee7"
            rating={5}
          />
          <Product
            id="0003"
            title="Grey Gem Button Shoulder Jumper"
            price={375}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F847874.jpg?alt=media&token=05979a94-9f29-4cf2-82b0-e68f72d9fa01"
            rating={5}
          />
        
        
          <Product
            id="0004"
            title="Navy/Yellow Geometric Print Tie Neck"
            price={2500}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F952535.jpg?alt=media&token=7bfd6269-9cee-47a7-86d4-0198785034cc"
            rating={5}
          />
          <Product
            id="0005"
            title="Mid Blue Puff Sleeve Denim Shirt"
            price={1400}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F788378.jpg?alt=media&token=3f6e4225-59cb-42b3-8651-2b186e278cb7"
            rating={5}
          />
             
              </div>
              <div className="product_header_title">Groceries</div>
           <div className="home__rows" >
           <Product
            id="0001"
            title="Banana 1 Dozen"
            price={50}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Ffruits-images%2F1-19.jpg?alt=media&token=a4791306-574f-4fcc-bdd2-2c7d437d3b77"
            rating={5}
          />
          <Product
            id="0002"
            title="
            Orange 1 kg"
            price={200}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Ffruits-images%2F1-20.jpg?alt=media&token=63f37cad-366c-4b79-add2-83ac55daeffc"
            rating={5}
          />
          <Product
            id="0003"
            title="Pineapple 1 piece"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Ffruits-images%2F1-21.jpg?alt=media&token=efe91526-29b1-4d46-b2b2-a04475460294"
            rating={5}
          />
       
        
          <Product
            id="0004"
            title="Coconut 1 piece"
            price={20}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Ffruits-images%2F1-22.jpg?alt=media&token=88876191-4e17-4cb9-b782-fd57341b429b"
            rating={5}
          />
          <Product
            id="0005"
            title="Guava 1 kg"
            price={150}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/grocery%2Ffruits-images%2F1-23.jpg?alt=media&token=6d0a3133-103c-4e41-8238-3415e555f2c2"
            rating={5}
          />
             
              </div>
            
        </div>
    )
}

export default HomePage