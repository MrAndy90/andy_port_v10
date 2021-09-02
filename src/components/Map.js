import React from "react";
import styled from "styled-components";
import MapImg from "../assets/images/map.png";
import PText from "./PText";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I Am</h3>
          <PText>Morstel, Antwerpen</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Koeisteerthofdreef+5,+2640+Mortsel/@51.1689258,4.4706447,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3fbca9103446f:0x4d7305b1ef1f2ed2!8m2!3d51.1689258!4d4.4728334"
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
