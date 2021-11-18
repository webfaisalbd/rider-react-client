import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sliding = () => {
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
    <div  style={{marginBottom:"50px"}}>
        
        <Slider {...settings}>
          <div>
          <img style={{ width: "600px",   height: "400px"}} src="https://i.ibb.co/52xcPWS/sliding2.jpg" />   
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/KsS530S/sliding3.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/w78RWM8/sliding5.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/Rj57jg8/sliding6.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/KFPTfVD/sliding7.jpg" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/Jt1G68h/sliding13.png" />
          </div>
          <div>
          <img style={{ width: "100%",   height: "400px"}} src="https://i.ibb.co/2sfTrVv/sliding12.jpg" />
          </div>
          
        </Slider>
      </div>
  );
};

export default Sliding;