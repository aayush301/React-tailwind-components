import React from "react";
import Faq from "../components/Faq";

const FaqDemo = () => {
  const faqs = [
    {
      q: "What does this website do?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, velit temporibus? Placeat, praesentium repellendus quas mollitia soluta error expedita veniam.",
      expanded: true,
    },
    {
      q: "Is there any payment in the website?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit saepe quas atque nihil officia, accusantium dignissimos in repudiandae eos mollitia? Architecto error mollitia minima beatae facere cupiditate dolorem modi nihil quae. Reprehenderit minima aliquam, esse doloribus deleniti corporis cum consequuntur et aperiam error illo illum commodi necessitatibus repellat similique quaerat? Consectetur quidem quibusdam eligendi voluptatum, voluptates accusamus animi nobis pariatur dolorum quasi veniam nisi vitae deleniti dolore officiis sapiente voluptate quisquam quaerat.",
    },
    {
      q: "How do I proceed?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dolores!",
    },
  ];

  return (
    <div className="m-8">
      <Faq faqs={faqs} defaultAllExpanded={false} />
    </div>
  );
};

export default FaqDemo;
