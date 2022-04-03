import React from 'react'
import Popconfirm from '../components/Popconfirm'

const PopconfirmDemo = () => {

  const handleConfirm = () => { alert("You confirmed ok") }
  const handleCancel = () => { alert("You cancelled") }

  return (
    <>
      <h1 className="m-8 text-center">Pop confirm</h1>

      <div className="ml-40">
        <Popconfirm title="Are you sure you want to delete this?" okText="Yes" cancelText="No" onConfirm={handleConfirm} onCancel={handleCancel}>
          <a href="#">Delete</a>
        </Popconfirm>

        <br /><br />

        <Popconfirm title="Are you sure about this?" okText="Yes, ofcourse" cancelText="Not yet" onConfirm={handleConfirm} onCancel={handleCancel} position='right'>
          <a href="#">Delete</a>
        </Popconfirm>
      </div>
    </>
  )
}

export default PopconfirmDemo