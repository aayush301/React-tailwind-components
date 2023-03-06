import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h1 className="m-8 text-center"> Modal</h1>
      <button
        className="p-4 bg-emerald-600 hover:bg-emerald-700 text-white ml-8"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="bg-white rounded-md max-w-[800px]"
      >
        <div className="p-8">
          <h2 className="font-bold"> This is some sample modal </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laboriosam vero, iusto at eos
            totam! Fugit, vitae ipsum! Officia quod deserunt minus reprehenderit consequatur possimus at
            praesentium aliquam, nobis asperiores! Ipsam dicta modi magni earum officiis quibusdam quidem
            placeat officia nam vel ducimus tempora laudantium facere eaque ut, voluptatem incidunt?
          </p>
          <div className="flex">
            <button
              className="ml-auto rounded-sm text-white bg-rose-500 p-2"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDemo;
