import React, { useEffect, useState } from 'react'

const Masonry = ({ children, columns, spacing }) => {

  const [items, setItems] = useState([]);
  columns = columns || 4;
  spacing = spacing || 16;

  useEffect(() => {

    let heights = [...Array(columns)].map((_, i) => ({ column: i + 1, height: 0 }));
    let itemsCopy = [];

    children.forEach(element => {
      heights.sort((ob1, ob2) => ob1.height - ob2.height);
      heights[0].height += element.props.height + spacing;
      itemsCopy.push(React.cloneElement(element, {
        style: { ...element.props.style, order: heights[0].column, margin: spacing / 2, width: `calc(${100 / columns}% - ${spacing}px)` }
      }));
    });

    [...Array(columns)].forEach((_, i) => {
      itemsCopy.push(
        <span className='w-0 m-0 p-0 basis-full' style={{ order: i + 1 }}></span>
      );
    });

    setItems(itemsCopy);

  }, [children, columns, spacing]);



  return (
    <>
      <div className='flex flex-col flex-wrap max-w-full h-full overflow-y-auto overflow-x-hidden p-2'>
        {items}
      </div>
    </>
  )
}

export default Masonry