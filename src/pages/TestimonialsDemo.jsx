import React from "react";
import Testimonials1 from "../components/Testimonials/Testimonials1";

const data = [
  {
    personName: "Rakesh Bansal",
    profile: "Marketing Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam ducimus perferendis impedit laborum, facilis dignissimos! Ullam minus cumque quo.",
  },
  {
    personName: "Vimal Kumar",
    profile: "Data Analyst",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
];

const TestimonialsDemo = () => {
  return (
    <div>
      <div className="text-center my-8 text-lg">Testimonials</div>
      <Testimonials1 data={data} />
    </div>
  );
};

export default TestimonialsDemo;
