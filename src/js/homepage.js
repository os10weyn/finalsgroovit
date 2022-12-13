import React from "react";
// import '../css/App'
import Header from './home/Header';
import Display from './home/Display';
import Navigation from './home/Navigation';
import Slider from "../js/home/Slider";



// import Carousel from "./home/carouselslider";

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import './../css/carousel.css'




function HomePage() {

    return ( 

        <div>
          <Header />
          <Slider />
          <Display />
          <Navigation />
        </div>
 );
       
       }


 
export default HomePage;