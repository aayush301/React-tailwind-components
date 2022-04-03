import React, { useState } from 'react'
import Masonry from '../components/Masonry'

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const MasonryDemo = () => {

  const [columns, setColumns] = useState(5);
  const [spacing, setSpacing] = useState(16);

  const [formData, setFormData] = useState({ columns: 5, spacing: 16 });
  const handleSubmit = () => {
    if (formData.columns == "") setColumns(0); else setColumns(Number(formData.columns));
    if (formData.spacing == "") setSpacing(0); else setSpacing(Number(formData.spacing));
  }

  return (
    <>
      <h1 className="m-8 text-center">Masonry</h1>
      <div>

        <div className='flex gap-2 mb-4 mx-auto w-fit'>
          <input className='border border-teal-400 focus:outline-none p-1' type="number" placeholder='Columns..' value={formData.columns} onChange={e => setFormData({ ...formData, columns: e.target.value })} />
          <input className='border border-teal-400 focus:outline-none p-1' type="number" placeholder='Spacing..' value={formData.spacing} onChange={e => setFormData({ ...formData, spacing: e.target.value })} />
          <button className='bg-teal-500 p-1' onClick={handleSubmit}>Submit</button>
        </div>

        <div className="mx-auto bg-blue-500 w-screen max-w-[400px] h-[500px] max-h-[80vh]">
          <Masonry columns={columns} spacing={spacing}>
            {heights.map((height, index) => (
              <div key={index} height={height} className='text-center bg-white rounded-md shadow-md transition-all duration-500' style={{ height: `${height}px` }}>
                {index + 1}
              </div>
            ))}
          </Masonry>
        </div>

      </div>
    </>
  )
}

export default MasonryDemo