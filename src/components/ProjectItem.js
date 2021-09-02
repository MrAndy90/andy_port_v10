import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../assets/images/projectImg.png";
import github from "../assets/images/github.png";
import wwweb from "../assets/images/wwweb.png";

const ProjectItemStyles = styled.div`
  .imgAndBtnContainer {
    position: relative;
    z-index: 9;
    width: 100%;
    height: 400px;
    border-radius: 10px;
  }

  .iconImgs {
    display: flex;
    position: absolute;
    left: 35%;
    top: 45%;
    transform: translate (50%);
    height: 12%;
    background-color: gold;
    align-items: center;
    justify-content: center;
  }

  .swiperbtn {
    content: "";
    position: absolute;
    left: 2%;
    top: 2%;
    height: 96%;
    width: 96%;
    color: black;
    background-color: black;
    opacity: 0.8;
    opacity: 0;
    transform: scale (0);
    transition: all 0.4s ease-in-out;
  }
  .swiperbtn:hover {
    opacity: 0.8;
    border-color: gold;
    border-radius: 10px;
    border-width: 3.5px;
    transform-origin: left;
    transition: all 0.4s ease-in-out;
  }

  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    border: 3px solid var(--gray-2);
    position: absolute;

    img {
      height: 100%;
      z-index: 8;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
      position: absolute;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
  return (
    <ProjectItemStyles>
      <div className="imgAndBtnContainer">
        <Link to="/projects" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <button className="swiperbtn"></button>
        <span className="iconImgs">
          <img src={wwweb} alt="wwweb" />
          <img src={github} alt="github" />
        </span>
      </div>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
