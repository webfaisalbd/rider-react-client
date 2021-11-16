import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
          <img style={{ width: "600px",   height: "400px"}} src="https://i.ibb.co/8Bwznt2/banner.jpg" />          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://img.etimg.com/thumb/msid-68423006,width-1200,height-900/magazines/panache/yamaha-motor-unveils-155-cc-bike-mt-15-at-rs-1-36-lakh.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://cdn.suzukimotorcycle.co.in/public-live/uploads/media-images/original/Gixxer-SF-Mira-Red-150-Website-Home-Page-Desktop-2547x1420-new-min_5f759dfde64f8.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://www.wallpapertip.com/wmimgs/57-577323_full-hd-bike-background.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://www.wallpapertip.com/wmimgs/57-577323_full-hd-bike-background.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          
        </Slider>
      </div>
    );
  }
}