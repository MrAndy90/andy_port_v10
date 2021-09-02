import { v4 as uuidv4 } from "uuid";
import weatherapp from "../images/weather-app.png";
import amazonclone from "../images/amazon-clone.png";
import euroapp from "../images/euro-app.png";
import pizzaapp from "../images/pizza-app.png";
import travelapp from "../images/travel-app.png";

const projects = [
  {
    id: uuidv4(),
    name: "Amazon Clone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: amazonclone,
  },
  {
    id: uuidv4(),
    name: "Euro App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: euroapp,
  },
  {
    id: uuidv4(),
    name: "Pizza App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: pizzaapp,
  },
  {
    id: uuidv4(),
    name: "Travel App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: travelapp,
  },
  {
    id: uuidv4(),
    name: "Weather App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: weatherapp,
  },
];

export default projects;
