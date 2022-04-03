import React, { useEffect, useState } from 'react'

const SortableList = ({ list }) => {
  const [items, setItems] = useState(list);
  const [draggedItem, setDraggedItem] = useState(null);
  const [overItem, setOverItem] = useState(null);

  const handleDragStart = e => {
    // console.log("drag start")
    let source = e.target;
    setDraggedItem(source);
    e.dataTransfer.effectAllowed = "move";
    let dragImageSource = source.cloneNode(true);
    dragImageSource.style.position = 'absolute';
    dragImageSource.style.top = '0px';
    dragImageSource.style.left = '-' + String(window.innerWidth) + 'px';
    dragImageSource.style.backgroundColor = "gray";
    document.body.append(dragImageSource);
    e.dataTransfer.setDragImage(dragImageSource, 0, 0);
  }

  const handleDragEnter = e => {
    // console.log("drag enter")
    setOverItem(e.target);
  }

  const handleDragLeave = e => {
    // console.log("drag leave")
    if (e.target == overItem) setOverItem(null);
  }

  const handleDragOver = e => {
    // console.log("drag over")
    e.preventDefault();
  }

  const handleDrop = e => {
    // console.log("drop")
    let data = items;
    let from = Number(draggedItem.dataset.index);
    let to = Number(overItem.dataset.index);
    if (from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    setItems(data);
    setDraggedItem(null);
    setOverItem(null);
  }

  return (
    <>
      <div className='w-[400px] h-[400px] overflow-auto'>
        <ul>
          {items.map((item, i) => (
            <li className={`flex py-3 px-3 transition duration-500 ${overItem?.dataset.index == i ? "bg-gray-200" : "bg-gray-50"} cursor-pointer`} key={i} data-index={i}
              draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}
            >
              <span>{item}</span>
              <span className='ml-auto'><i className="fa-solid fa-grip-lines"></i></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SortableList