import React from 'react';
import InnerSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import {Wallpaper} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const ImageSlider = (props) => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
      <InnerSlider {...settings}>
        <Wrap>
          <Link to={'/'}>
            <img src="/images/slider-badag.jpg" alt=""/>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={'/'}>
            <img src="/images/slider-badag.jpg" alt=""/>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={'/'}>
            <img src="/images/slider-badag.jpg" alt=""/>
          </Link>
        </Wrap>
        <Wrap>
          <Link to={'/'}>
            <img src="/images/slider-badag.jpg" alt=""/>
          </Link>
        </Wrap>
      </InnerSlider>
  );
};

const Wrap = styled.div`
    background-color: #ff80be;
`;

export default ImageSlider;
