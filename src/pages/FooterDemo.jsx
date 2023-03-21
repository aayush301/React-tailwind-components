import React from "react";
import Footer from "../components/Footer";

const FooterDemo = () => {
  return (
    <div>
      <div className="text-lg text-center mb-8">Footer</div>
      <Footer />
      <div className="mb-20"></div>
      <Footer theme="light" />
    </div>
  );
};

export default FooterDemo;
