import React, { useRef } from 'react';
import './Team.scss';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';
import { teamData } from './data';
import Member from '../MembersProfile/Member';

function Team() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    arrows: true,
    slidesToScroll: 3.2,
    initialSlide: 0,
    dotsClass: "slick-dots slick-thumb",

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

        <Container className="team-members-lg">
          {teamData.map((item, i) => (
            <div className="advisors-members" key={i}>
              <div className="members">
                <div className="members-images">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
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
        </Container>
        <Container className="team-members-sm">
          <Slider className="advisors-sm" ref={sliderRef} {...settings}>
            {teamData.map((item, i) => (
              <div ref={sliderRef} className="advisors-members" key={i}>
                <div className="members">
                  <div className="members-images">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
        </Container>
      </Container>
    </>
  );
}

export default Team;
