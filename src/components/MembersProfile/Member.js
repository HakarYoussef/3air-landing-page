import React from 'react';
import './Member.scss';
import Container from 'react-bootstrap/Container';


function Member({ ProfileImage, ProfileLink, MemberName, MemberDescription }) {
    return (
        <>
            <Container className='members'>
                <div className='members-images'>
                    <img src={ProfileImage} alt='Profile' />
                    <a href={ProfileLink} target="_blank"  rel='noopener noreferrer' className='linkedin'>
                        <img src='./assets/linkedin.svg' alt='Linkedin' />
                    </a>
                </div>
                <div className='memberCard'>
                    <div className='memberCardInner'> 
                        <h3>
                            {MemberName}
                        </h3>
                        <p>
                            {MemberDescription}
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Member;