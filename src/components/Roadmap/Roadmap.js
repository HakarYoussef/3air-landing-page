import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { roadmapData } from './data';
import './RoadmapStyles.scss';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import { motion } from 'framer-motion';

function Roadmap() {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    arrows: false,
    slidesToScroll: 3.2,
    initialSlide: 0,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: 'slick-dots slick-thumb',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h2 className="roadHeaderContainer">Roadmap</h2>
        <div className="roadOverlay"></div>

        <Slider ref={sliderRef} {...settings}>
          {roadmapData.map((item) => (
            <motion.div
              ref={sliderRef}
              className="roadCardWrapper"
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                staggerChildren: 0.5,
              }}
            >
              <h4 key={item.id} className="roadCardTop">
                {item.title}
              </h4>

              {item.desc.map((descItem) => (
                <div className="roadCardBottom">
                  <li key={descItem.id}>{descItem}</li>
                </div>
              ))}
            </motion.div>
          ))}
        </Slider>
        <ButtonGroup className="roadmapBtns">
          <Button
            className="arrowBtnContainer"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <div className="arrowBtn">
              <span className="join" />
              <img src="assets/prevArrowIcon.svg" alt="arrow" />
            </div>
          </Button>
          <Button
            className="arrowBtnContainer"
            onClick={() => sliderRef.current.slickNext()}
          >
            <div className="arrowBtn">
              <span className="join" />
              <img src="assets/nextArrowIcon.svg" alt="arrow" />
            </div>
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Roadmap;
