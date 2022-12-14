import React, { useRef, useState, useEffect } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { teamData } from './data';
import '../MembersProfile/Member.scss';
import './Team.scss';

function Team() {
  const sliderRef = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    initialSlide: 0,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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

        <Container className="team-members-lg">
          {teamData.map((item, i) => (
            <div className="advisors-members" key={'teamdatalg' + i}>
              <div className="members">
                <div className="members-images">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL+item.img} alt="Profile" />
                  </a>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <img src={process.env.PUBLIC_URL+'/assets/linkedin.svg'} alt="Linkedin" />
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
            {teamData.map((item, i) => (
              <div className="advisors-members" key={'teamdatasm' + i}>
                <div className="members">
                  <div className="members-images">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={process.env.PUBLIC_URL + item.img} alt="Profile" />
                    </a>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <img src={process.env.PUBLIC_URL+'/assets/linkedin.svg'} alt="Linkedin" />
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
        </Container>
        {
          width <= 767 ? (
            <ButtonGroup className="roadmapBtns">
              <Button
                className="arrowBtnContainer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <div className="arrowBtn">
                  <span className="join" />
                  <img src={process.env.PUBLIC_URL+ '/assets/prevArrowIcon.svg'} alt="arrow" />
                </div>
              </Button>
              <Button
                className="arrowBtnContainer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <div className="arrowBtn">
                  <span className="join" />
                  <img src={process.env.PUBLIC_URL+ '/assets/nextArrowIcon.svg'} alt="arrow" />
                </div>
              </Button>
            </ButtonGroup>
          ) : (
            <></>
          )
        }
      </Container>
    </>
  );
}

export default Team;
