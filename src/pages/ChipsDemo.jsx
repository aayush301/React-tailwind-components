import React from 'react'
import Chip from '../components/Chip'

const ChipsDemo = () => {
  return (
    <>
      <h1 className='m-8 text-center'>Chips</h1>
      <div className="mx-8">
        <Chip text={"Resources"} />
        <Chip text={"Templates"} addCloseBtn={true} />
        <Chip text={"Some long long long long text"} addCloseBtn={true} />
      </div>
    </>
  )
}

export default ChipsDemo