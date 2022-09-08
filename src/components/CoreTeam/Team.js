import React, { useRef } from 'react';
import './Team.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from '../MembersProfile/Member';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { teamData } from './data';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

function Team() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1.2,
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
        <h2 className="roadHeaderContainer" id="team">
          Team
        </h2>
        <div className="roadOverlay"></div>

        <Container className="team-members-lg">
          {teamData.map((item) => (
            <div className="advisors-members">
              <div className="members">
                <div className="members-images">
                  <img src={item.img} alt="Profile" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <img src="./assets/linkedin.svg" alt="Linkedin" />
                  </a>
                </div>
                <div className="memberCard">
                  <div className="memberCardInner">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
        <Container className="team-members-sm">
          <Slider className="advisors-sm" ref={sliderRef} {...settings}>
            {teamData.map((item) => (
              <div ref={sliderRef} className="advisors-members">
                <div className="members">
                  <div className="members-images">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <img src={item.img} alt="Profile" />
                    </a>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <img src="./assets/linkedin.svg" alt="Linkedin" />
                    </a>
                  </div>
                  <div className="memberCard">
                    <div className="memberCardInner">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* <ButtonGroup className="roadmapBtns">
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
          </ButtonGroup> */}
        </Container>
      </Container>
    </>
  );
}

export default Team;
