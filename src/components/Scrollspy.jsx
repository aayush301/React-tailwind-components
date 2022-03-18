import React, { useState } from 'react'

const Scrollspy = () => {

  const [activeId, setActiveId] = useState("home");
  const linkClasses = (id) => (
    `transition ${activeId == id && "text-blue-500"}`
  );

  const handleScroll = (e) => {
    const sections = e.target.children;
    const scroll = e.target.scrollTop;
    [...sections].forEach(section => {
      const dist = section.offsetTop;
      // if (scroll >= dist) setActiveId(section.id);   // Works
      if (scroll >= dist && scroll <= dist + section.offsetWidth) setActiveId(section.id);  // more optimal
    })
  }

  return (
    <>
      <div className='flex flex-col sm:flex-row sm:gap-8 h-96 shadow-md m-4'>
        <div className='p-4 shadow'>
          <ul className='flex gap-4 sm:flex-col sm:gap-0'>
            <li> <a className={linkClasses("home")} onClick={() => setActiveId("home")} href="#home">Home</a> </li>
            <li> <a className={linkClasses("services")} onClick={() => setActiveId("services")} href="#services">Services</a> </li>
            <li> <a className={linkClasses("about")} onClick={() => setActiveId("about")} href="#about">About</a> </li>
            <li> <a className={linkClasses("contact")} onClick={() => setActiveId("contact")} href="#contact">Contact</a> </li>
          </ul>
        </div>

        <div className='relative flex flex-col gap-16 overflow-auto scroll-smooth' onScroll={handleScroll}>
          <section id='home'>
            <h3>Home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a porro, natus illum quae numquam, fugit sint, quaerat eligendi harum error cumque. Corrupti officia iure excepturi mollitia ipsa. Soluta dicta autem recusandae, inventore beatae eos facere doloremque nulla facilis quod. Blanditiis, nesciunt! Quasi, quo laboriosam illum quos ullam fuga doloribus animi recusandae reiciendis harum eaque corporis dolorem accusantium tempora repellendus odit eos omnis deleniti fugit quas sunt suscipit rem! Exercitationem, beatae nobis voluptatibus asperiores ullam saepe culpa in provident laudantium veritatis error nesciunt tempora fugiat, amet placeat labore voluptates. Facere deleniti animi cum perferendis voluptatum perspiciatis incidunt accusantium architecto beatae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a porro, natus illum quae numquam, fugit sint, quaerat eligendi harum error cumque. Corrupti officia iure excepturi mollitia ipsa. Soluta dicta autem recusandae, inventore beatae eos facere doloremque nulla facilis quod. Blanditiis, nesciunt! Quasi, quo laboriosam illum quos ullam fuga doloribus animi recusandae reiciendis harum eaque corporis dolorem accusantium tempora repellendus odit eos omnis deleniti fugit quas sunt suscipit rem! Exercitationem, beatae nobis voluptatibus asperiores ullam saepe culpa in provident laudantium veritatis error nesciunt tempora fugiat, amet placeat labore voluptates. Facere deleniti animi cum perferendis voluptatum perspiciatis incidunt accusantium architecto beatae!</p>
          </section>

          <section id="services">
            <h3>Services</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dignissimos dolorum! Aliquam et unde eveniet nisi dolores tempora voluptate similique illum dicta inventore voluptatibus, repellat quia delectus corrupti esse veritatis. Esse, iure sed rerum quis similique vero quae. Cumque nisi, velit temporibus neque labore nulla dolores recusandae adipisci in iure!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dignissimos dolorum! Aliquam et unde eveniet nisi dolores tempora voluptate similique illum dicta inventore voluptatibus, repellat quia delectus corrupti esse veritatis. Esse, iure sed rerum quis similique vero quae. Cumque nisi, velit temporibus neque labore nulla dolores recusandae adipisci in iure!</p>
          </section>

          <section id="about">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil autem quo architecto animi fugit adipisci aut doloremque, ipsa aliquam eaque, itaque eius velit quos corrupti illum impedit vel ullam. Alias architecto aut perferendis amet aliquam veritatis explicabo praesentium similique officia quo cumque impedit quae magnam tempore ex, eligendi rem?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil autem quo architecto animi fugit adipisci aut doloremque, ipsa aliquam eaque, itaque eius velit quos corrupti illum impedit vel ullam. Alias architecto aut perferendis amet aliquam veritatis explicabo praesentium similique officia quo cumque impedit quae magnam tempore ex, eligendi rem?</p>
          </section>

          <section id='contact'>
            <h3>Contact</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus soluta, aut iure recusandae porro laboriosam voluptatum at ut velit? Est, aliquid? Enim quo tempore, est quam a voluptatibus doloremque sapiente corporis error eum itaque. Laudantium adipisci fuga nostrum corrupti possimus tenetur perspiciatis repellendus nesciunt id quos quam quaerat vel, eligendi sit impedit cupiditate error laborum obcaecati recusandae vero eveniet porro.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus soluta, aut iure recusandae porro laboriosam voluptatum at ut velit? Est, aliquid? Enim quo tempore, est quam a voluptatibus doloremque sapiente corporis error eum itaque. Laudantium adipisci fuga nostrum corrupti possimus tenetur perspiciatis repellendus nesciunt id quos quam quaerat vel, eligendi sit impedit cupiditate error laborum obcaecati recusandae vero eveniet porro.</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default Scrollspy