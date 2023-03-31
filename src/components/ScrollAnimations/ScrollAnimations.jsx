import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const ScrollAnimations = () => {
  const elementRef = useRef();
  const { isVisible } = useIntersectionObserver(elementRef, { threshold: 1 });

  return (
    <>
      <div className="w-full">
        <div className="px-16 mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium velit repudiandae? Saepe
          minus rem odit labore corporis, tempora, ducimus dolores omnis inventore, similique adipisci! Illum
          itaque incidunt eaque minima reprehenderit commodi reiciendis ipsum nobis, voluptas quia earum
          consequuntur quod, animi enim nostrum ut. Sequi ad inventore facere. Natus debitis dolorum omnis
          voluptatem, possimus explicabo amet temporibus modi! Quidem, aut. A atque doloribus voluptatem
          dolores culpa nulla modi sapiente rerum nam tempora dolor maxime, quod nemo molestias magnam iusto
          facilis deleniti. Alias, blanditiis veritatis nemo, beatae molestiae id facere et consequuntur
          cumque, iste dolor ut! Velit corrupti eum cumque, nam ut consequuntur! Voluptate eos eum cupiditate
          harum officia nam magnam atque voluptates laudantium, exercitationem distinctio rerum odit beatae
          quos expedita deserunt ipsum numquam laboriosam nemo sapiente vero magni ex quam. Consequuntur
          voluptatum totam harum! Quod, dolorum laborum alias repellat in atque saepe? Et tempora deleniti
          nulla? Cupiditate autem nisi animi consequatur modi quod alias numquam, aut labore quae
          exercitationem molestiae nostrum tempora perferendis asperiores fugit quam placeat unde soluta ipsum
          aliquam corporis. Eos blanditiis quas repellendus facilis quasi nihil dolorem ea omnis, natus ut
          excepturi sapiente. Excepturi suscipit ea officia eos modi, error rerum at reprehenderit, nesciunt
          laborum, magni provident!
        </div>

        <div
          ref={elementRef}
          className={`mb-[800px] mx-auto w-[80%] transition-all duration-500 bg-gray-200 p-8 rounded-[4px] ${
            isVisible ? "opacity-1" : "opacity-0"
          } `}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sed officiis quas officia facilis
          totam architecto magnam ducimus quod itaque.
        </div>
      </div>
    </>
  );
};

export default ScrollAnimations;
