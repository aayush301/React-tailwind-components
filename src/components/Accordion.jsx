import React, { useEffect, useState } from 'react'

const Accordion = () => {

  const accordionContent = [
    {
      header: "Accordion item #1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in a soluta, quos ex architecto officia voluptates atque dolores saepe enim molestias repellat inventore maxime sit. Unde est minus culpa, nisi perspiciatis quasi delectus. Nam ex molestiae animi provident natus voluptate tempora quam, suscipit doloremque quisquam consequuntur esse blanditiis aliquid ea a id ad expedita cumque eos ab distinctio beatae aspernatur! Aliquid, in. Velit hic ad libero culpa iure perspiciatis minima earum obcaecati ullam necessitatibus sunt nemo corporis qui aut id maiores dicta eveniet, assumenda vitae expedita distinctio rem sint? Maxime modi inventore ipsa neque reiciendis facere? Saepe, eum odio!"
    },
    {
      header: "Accordion item #2",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur accusamus nesciunt eius molestiae dicta distinctio obcaecati praesentium perspiciatis inventore."
    },
    {
      header: "Accordion item #3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime suscipit, ut aut magnam quo veritatis. Pariatur iste, necessitatibus optio vero hic magni quis similique nisi. Debitis, facilis iste! Sequi, quis quod maiores doloremque corrupti totam aliquam iure! Voluptates excepturi, provident dolore aliquam cumque obcaecati eveniet aspernatur itaque blanditiis rem."
    },
  ];

  const [isItemOpen, setIsItemOpen] = useState([...Array(accordionContent.length)].fill(false));

  const accordionHeaderClasses = `flex justify-between px-4 py-2 w-full text-white bg-[#2694af] border-b-2 border-white`;
  const accordionBodyClasses = `px-4 transition-all duration-[400ms]`;

  const toggleAccordionItem = (index) => {
    setIsItemOpen(isItemOpen => {
      const arr = isItemOpen.slice();
      arr[index] = !arr[index];
      return arr;
    });
  }


  return (
    <>
      <div className='w-[500px] m-2 rounded-md shadow-md'>
        {accordionContent.map((accordionItem, index) => (
          <div className='overflow-hidden' key={index}>
            <button className={accordionHeaderClasses} onClick={() => toggleAccordionItem(index)}>
              <span>{accordionItem.header}</span>
              <span><i className={`fa-solid fa-angle-down transition ${isItemOpen[index] && "rotate-180"}`}></i></span>
            </button>

            <div className={`${accordionBodyClasses} ${isItemOpen[index] ? "h-auto max-h-[1000px] py-2" : "max-h-0 py-0"}`}>
              {accordionItem.body}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Accordion