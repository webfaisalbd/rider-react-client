import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div style={{marginTop:"30px"}}>
            <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">brand</a></li>
  	 				<li><a href="#">model</a></li>
  	 				<li><a href="#">warranty</a></li>
  	 				<li><a href="#">delivery hour</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a target='_blank' href="https://www.facebook.com/faisalDotMe/"><i class="fab fa-facebook-f"></i></a>
  	 				<a target='_blank' href="https://github.com/webfaisalbd"><i class="fab fa-github"></i></a>
  	 				<a target='_blank' href="#"><i class="fab fa-instagram"></i></a>
  	 				<a target='_blank' target='_blank' href="https://www.linkedin.com/in/webfaisalbd/"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </div>
    );
};

export default Footer;