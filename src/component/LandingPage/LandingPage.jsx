import React from "react";
import "../LandingPage/LandingPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { NavLink, Link, useNavigate } from "react-router-dom";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import Apple from "../../image/Appleimage.png"
import Google from "../../image/google.png"
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../../image/Landingbg.jpg"
import Slide3 from "../../image/landing4.webp"
import Slide2 from "../../image/landing11.jpeg"
import Slide4 from "../../image/landing6.webp"
import Chat1 from "../../image/Chat1.png"
import Chat2 from "../../image/Chat2.png"
import Chat3 from "../../image/Chat3.png"
// import Slide3  from "../../image/landing8.webp"




const LandingPage = () => {



    return (
        <div className="landing-page">
            <div className="landing-nav">
                <div className="landing-info">
                    <div className="landing-logo"></div>
                    <h1>Meet</h1>
                </div>
                <div className="landing-btn">
                    <NavLink to={"/signup"}> <button className="landing-signup">Signup</button></NavLink>
                    <NavLink to={"/login"}> <button className="landing-login">Login</button></NavLink>

                </div>
            </div>
        <div className="carousel-main">
            <Carousel>
                <Carousel.Item> 
                    <img
                        className="d-block "
                        src={Slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Create a new whole family not just your home but from your society</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={Slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       <h2>Expanding your network brings about a career opportunities. Meet helps you create that network for a happier future</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={Slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Never be alone with your interest, get to make new friends who share the same thoughts with you.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={Slide4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h2>Be the first to reach out</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={Slide3}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h2>The fatest way to connect with your peeers and share your opinions on all common interest</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

           
            <div className="landing-side">
                <h1> Download the app today!</h1>
                <div className="landing-app">
                    <Link>
                        <div className="landing-apple">
                            <img src={Apple} alt="" />
                            <h2>Download on the  <br /><span>App store </span> </h2>
                        </div>
                    </Link>

                    <Link>
                        <div className="landing-google">
                            <img src={Google} alt="" />
                            <h2>Download on the  <br /><span>Play store </span> </h2>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="landing-card">
                <div className="landing-card2">
                <img src={Chat2} alt="" />
                <p>Find yourself in a new new place or city? Dont be alone, reach out to new people. Find your peers and find your connection.</p>
                </div>
                <div className="landing-card2">
                <img src={Chat3} alt="" />
                <p>Find yourself in a new new place or city? Dont be alone, reach out to new people. Find your peers and find your connection.</p>
                </div>
            </div>



        </div>
    );
}

export default LandingPage;