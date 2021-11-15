import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <a href="#"><img  src="https://images.vexels.com/media/users/3/152654/isolated/preview/e5694fb12916c00661195c0a833d1ba9-sports-bike-icon.png" alt="logo"/></a>
                        <p>We provide best quality bikes in various types of features , brands and prices.</p>
                        <div class="hr"></div>
                        <h6>Address: Savar , Dhaka</h6>
                        <h6>+088 01685477114<span>||</span>+088 01571344563</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href="https://www.facebook.com/faisalDotMe"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href="https://www.linkedin.com/in/webfaisalbd/"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" href="https://github.com/webfaisalbd"><i class="fab fa-github"></i></a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
        </div>
    );
};

export default Footer;