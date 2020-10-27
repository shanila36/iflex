import React from 'react'
import Footer from 'rc-footer';
import "./Footer-css.css"
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { Link, useHistory, withRouter } from "react-router-dom";
import { render } from 'react-dom';
function Footers() {
    return (
        <div className="main">
<footer class="footer-distributed">

			<div class="footer-left">

			<Link to="/">
          <img
            className="logo_holders"
            src="https://i.ibb.co/Vgrw8Df/Logo-I.png"
          ></img>
        </Link>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Orders</a>
				
					<a href="#">Store Locations</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span> House: 41, Amtoli,</span>  Airport Road, Mohakhali, Dhaka-1212</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>0155555555555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="/">support@iflexmart.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
          We aim to offer our customers a variety of the latest product. We offer all of this while providing excellent customer service and friendly support.
				</p>

				<div class="footer-icons">

					<a href="#"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg" class="icons"></img></a>
					<a href="#"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733558.svg" class="icons"></img></a>
					<a href="#"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733561.svg" class="icons"></img></a>
					<a href="#"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733585.svg" class="icons"></img></a>

				</div>
        
      </div>
      <div className="bottom">"Made with ❤️ by IflexSoft"</div>

		</footer>
      
        </div>
    )
}

export default Footers
