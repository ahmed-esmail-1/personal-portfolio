import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import  'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    // State variables
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    
    // useEffect to control text rotation
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    // Function to handle text rotation
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    // Array of text to rotate
    const toRotate = ["Software Engineer", "Systems Engineer", "IT Administrator", "Java Developer"];

    return (
        // Start of the banner section with an ID of "home"
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    {/* Left column for content */}
                    <Col xs={12} md={6} xl={7}>
                        {/* TrackVisibility component for animation */}
                        <TrackVisibility>
                            {({ isVisible }) => (
                                // Content to animate when visible
                                <div className={isVisible ? "animate__animated animate__slideInLeft" : "" }>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{'Hi, I\'m Ahmed Esmail '}<span className="wrap">{text}</span></h1>
                                    <p>Experienced Software Engineer and Full-Stack Developer with a proven track record of creating robust applications and solutions. Proficient in a wide range of programming languages including C#, Java, JavaScript, and C++, with expertise in backend and frontend development. Known for optimizing performance and enhancing user experience. Strong collaborator, effective problem solver, and dedicated to delivering high-quality results. Open to new opportunities and challenges in the tech industry.</p>
                                    <button onClick={() => window.open("https://www.linkedin.com/in/ahmedesmailofficial/", "_blank")}>Let's Connect<ArrowRightCircle size={25} /></button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
    
                    {/* Right column for an image */}
                    <Col xs={12} md={6} xl={5}>
                        {/* TrackVisibility component for animation */}
                        <TrackVisibility>
                            {({ isVisible }) => (
                                // Image to animate when visible
                                <div className={isVisible ? "animate__animated animate__slideInRight" : "" }>
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
    
}
