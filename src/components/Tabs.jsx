import React, { useState } from 'react'

const Tabs = () => {
  const [openedTab, setOpenedTab] = useState(0);

  const tabClasses = (tabNo) => (
    `nav-link block font-medium text-xs leading-tight cursor-pointer uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 mt-2 hover:bg-gray-100 focus:border-transparent transition
     ${openedTab === tabNo && "text-blue-500 border-blue-500"} `
  );

  return (
    <>
      <div className='border-2 border-slate-200 m-4'>
        <ul className="flex flex-row flex-wrap list-none border-b-2 border-slate-200 p-0 mb-4">
          <li> <a className={tabClasses(0)} onClick={() => setOpenedTab(0)}>Home</a> </li>
          <li> <a className={tabClasses(1)} onClick={() => setOpenedTab(1)}>Profile</a> </li>
          <li> <a className={tabClasses(2)} onClick={() => setOpenedTab(2)}>Messages</a> </li>
          <li> <a className={tabClasses(3)} onClick={() => setOpenedTab(3)}>Contact</a> </li>
        </ul>

        <div className="">
          <div className={openedTab != 0 ? "hidden" : ""}>
            Tab 1 content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus minima eveniet, ipsum ad repellat eos delectus velit quasi facilis nesciunt nihil quam architecto mollitia molestias explicabo quia dolor atque esse expedita culpa. Velit sed assumenda molestiae, nulla fugit officia neque optio delectus aspernatur, architecto, rem repudiandae odio! Neque, nemo!
          </div>
          <div className={openedTab != 1 ? "hidden" : ""}>
            Tab 2 content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorem?
          </div>
          <div className={openedTab != 2 ? "hidden" : ""}>
            Tab 3 content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos delectus voluptas ducimus labore sint ipsa quasi esse incidunt quisquam quaerat accusantium aperiam possimus eveniet reprehenderit, veritatis commodi blanditiis laudantium voluptate iste! Sapiente illo reprehenderit animi enim eum officiis nihil quis molestiae minima nemo accusantium error suscipit aperiam, aut odit nam deleniti eveniet inventore temporibus expedita. Dolorem, ex saepe? Iusto adipisci earum inventore repellat repudiandae tempora maxime dolorum aperiam at officiis, consequuntur praesentium similique, ex sequi, minus error quaerat excepturi doloribus temporibus? Quis nisi asperiores odit in corporis natus, ab mollitia cumque quasi qui expedita, enim eligendi debitis laborum cupiditate?
          </div>
          <div className={openedTab != 3 ? "hidden" : ""}>
            Tab 4 content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi.
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs