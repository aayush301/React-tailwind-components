import React, { useState } from 'react'
import { ToastList, useToast } from '../components/Toast';

const ToastDemo = () => {

  const [toastList, addToast, deleteToast] = useToast([]);
  const [formData, setFormData] = useState({ hasCloseBtn: true });
  const handleChange = e => {
    if (e.target.type == "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    }
    else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addToast({
      msg: formData.msg,
      type: formData.type,
      position: formData.position,
      hasCloseBtn: formData.hasCloseBtn,
      autoClose: formData.autoClose,
      autoCloseTimeout: formData.autoCloseTimeout,
    });
  }

  return (
    <>
      <ToastList toastList={toastList} deleteToast={deleteToast} />
      <h1 className='m-8 text-center'>Toasts</h1>
      <form className='bg-gray-100 p-8 mx-auto w-fit rounded-sm shadow-sm'>
        <div className='mb-4'>
          <label htmlFor="">Message: </label>
          <input type="text" name="msg" className='border-2 border-blue-500 focus:outline-none' onChange={handleChange} />
        </div>

        <div className="mb-1">
          <input type="checkbox" name="hasCloseBtn" onChange={handleChange} checked={formData.hasCloseBtn} />
          <label htmlFor=""> Has close Btn?</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="autoClose" onChange={handleChange} />
          <label htmlFor=""> Autoclose?</label>
        </div>
        <div className="mb-2">
          <label htmlFor=""> Autoclose Timeout: </label>
          <input type="text" name="autoCloseTimeout" className='border-2 border-blue-500 focus:outline-none' onChange={handleChange} />
        </div>

        <div className='mb-4'>
          <label htmlFor="">Type of toast:</label>
          <div className="mb-1">
            <input type="radio" name="type" value="success" onChange={handleChange} />
            <label htmlFor="">Success</label>
          </div>
          <div className="mb-1">
            <input type="radio" name="type" value="info" onChange={handleChange} />
            <label htmlFor="">Info</label>
          </div>
          <div className="mb-1">
            <input type="radio" name="type" value="warning" onChange={handleChange} />
            <label htmlFor="">Warning</label>
          </div>
          <div className="mb-1">
            <input type="radio" name="type" value="error" onChange={handleChange} />
            <label htmlFor="">Error</label>
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor="">Position:</label>
          <div className="mb-1">
            <input type="radio" name="position" value="top-right" onChange={handleChange} />
            <label htmlFor="">Top-right</label>
          </div>
          <div className="mb-1">
            <input type="radio" name="position" value="top-left" onChange={handleChange} />
            <label htmlFor="">Top-left</label>
          </div>
          <div className="mb-1">
            <input type="radio" name="position" value="bottom-right" onChange={handleChange} />
            <label htmlFor="">Bottom-right</label>
          </div>
          <div className="mb-1">
            <input type="radio" name="position" value="bottom-left" onChange={handleChange} />
            <label htmlFor="">Bottom-left</label>
          </div>
        </div>

        <button className='block mx-auto bg-fuchsia-700 text-white p-2 rounded-sm' onClick={handleSubmit}>Show Toast</button>
      </form>
    </>
  )
}

export default ToastDemo