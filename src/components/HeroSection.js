import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/hero.png";
import Button from "./Button";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import PText from "./PText";
import cv from "./Andy_CV_NL.pdf";

const HeroStyles = styled.div`
  .Bhero__social__indicatorcont {
    display: flex;
    align-items: center !important;
  }
  #Bscrollword,
  #Bhero__social__follow {
    font-size: 20px;
  }
  #Bhero__social__arrow {
    max-height: 70px;
    width: 36px;
    object-fit: contain;
    transform: translateY(0px) translateX(35px) rotate(-90deg);
  }
  #Bhero__social__followlink {
    font-size: 20px;
    margin-left: 75px;
  }
  #cv_button {
    background-color: var(--gray-1);
    cursor: pointer;
    z-index: 100 !important;
    margin-top: 2rem;
    font-size: 2.2rem;
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: var(--gray-2);
  }
  .btn-link {
    color: var(--gray-2);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  //background//
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  //Hello my name is......//
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    //Andy Allen//
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      text-shadow: 1px 1px 20px black, 0 0 0.01em white, 0 0 0.1em white;
    }
  }
  //Image Profile Pic//
  .hero__img {
    max-width: 800px;
    width: 95%;
    height: auto;
    margin: 0 auto;
    border: 3px solid var(--gray-1);
  }
  //Text Underneath Profile Pic//
  .hero__info {
    margin-top: 3rem;
  }
  //Arrows//
  .hero__socialleft {
    position: absolute;
    transform: rotate(90deg);
    width: 400px;
    margin: 0px 0px 0px -160px;
    left: 0vw;
    top: 50vh;
  }
  .hero__socialright {
    position: absolute;
    transform: rotate(90deg);
    width: 400px;
    margin: 0px 0px 0px calc(100vw - 250px);
    left: 0vw;
    top: 50vh;
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 400px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        span {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        a {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, My Name is</span>
            <span className="hero__name">Andy Allen</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </PText>{" "}
            <a
              className="App-link"
              href={cv}
              download
              rel="noopener noreferrer"
            >
              <button
                id="cv_button"
                href={cv}
                download
                rel="noopener noreferrer"
                btnText="Download CV"
              >
                <a
                  className="btn-link"
                  href={cv}
                  download
                  rel="noopener noreferrer"
                >
                  Download my CV
                </a>
              </button>
            </a>
          </div>
          <div className="hero__socialleft">
            <div className="Bhero__social__indicatorcont">
              <span id="Bhero__social__follow">Follow Me On </span>
              <img
                id="Bhero__social__arrow"
                src={ScrollDownArrow}
                alt="ScrollDown Arrow"
              />

              <a
                id="Bhero__social__followlink"
                href="https://be.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
          <div className="hero__socialright">
            <div className="Bhero__social__indicatorcont">
              <p id="Bscrollword">Scroll</p>
              <img
                id="Bhero__social__arrow"
                src={ScrollDownArrow}
                alt="ScrollDown Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
