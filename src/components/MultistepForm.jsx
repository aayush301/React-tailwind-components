import React, { useState } from 'react'

const MultistepForm = () => {

  const [step, setStep] = useState(0);
  const lastStep = 3;

  const iconClasses = (index) => (
    `flex items-center justify-center w-12 h-12 py-3 border-2 rounded-full transition duration-500 ease-in-out
    ${index < step && "text-teal-600 bg-white border-teal-600"}
    ${index == step && "text-white bg-teal-600 border-teal-600"}
    ${index > step && "text-gray-500 bg-white border-gray-300"}`
  );

  const stepNameClasses = (index) => (
    `absolute mt-16 w-32 text-center text-xs font-medium uppercase
    ${index < step && "text-teal-600"}
    ${index == step && "text-teal-600 font-bold"}
    ${index > step && "text-gray-500"}`
  );

  const lineClasses = `flex-auto h-1 bg-gray-300`;

  const lineFilledClasses = (index) => (
    `transition-width duration-500 ease-in-out h-full bg-teal-600
    ${index < step ? "w-full" : "w-0"}`
  );

  const formContainerClasses = (index) => (
    `h-80 overflow-auto
    ${index != step && "hidden"}`
  );

  const previousbtnClasses = `px-4 py-2 bg-rose-500 text-white ${step == 0 && "hidden"}`;
  const nextbtnClasses = `px-4 py-2 bg-rose-500 text-white ml-auto ${step == lastStep && "hidden"}`;
  const submitbtnClasses = `px-4 py-2 bg-blue-500 text-white ml-auto ${step != lastStep && "hidden"}`;

  const [formData, setFormData] = useState({});
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = () => {
    console.log("Submitted");
  }


  return (
    <>
      <div className='p-4 w-[90%] m-auto shadow-md'>

        <div className='flex items-center'>
          <div className="flex flex-col items-center relative">
            <div className={iconClasses(0)}>
              <span><i className="fa-solid fa-user-plus"></i></span>
            </div>
            <div className={stepNameClasses(0)}>Account</div>
          </div>

          <div className={lineClasses}>
            <div className={lineFilledClasses(0)}></div>
          </div>

          <div className="flex flex-col items-center relative">
            <div className={iconClasses(1)}>
              <span><i className="fa-solid fa-bookmark"></i></span>
            </div>
            <div className={stepNameClasses(1)}>Personal Details</div>
          </div>

          <div className={lineClasses}>
            <div className={lineFilledClasses(1)}></div>
          </div>

          <div className="flex flex-col items-center relative">
            <div className={iconClasses(2)}>
              <span><i className="fa-solid fa-gear fa-lg"></i></span>
            </div>
            <div className={stepNameClasses(2)}>Settings</div>
          </div>

          <div className={lineClasses}>
            <div className={lineFilledClasses(2)}></div>
          </div>

          <div className="flex flex-col items-center relative">
            <div className={iconClasses(3)}>
              <span><i className="fa-solid fa-database"></i></span>
            </div>
            <div className={stepNameClasses(3)}>Review</div>
          </div>
        </div>

        <div className='mt-12'>
          <div className={formContainerClasses(0)}>
            <form>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Email</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input placeholder="Your email.." className="p-1 px-2 outline-none w-full text-gray-800" name='email' onChange={handleChange} />
              </div>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Password</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input type="password" placeholder="Make a password.." className="p-1 px-2 outline-none w-full text-gray-800" name='password' onChange={handleChange} />
              </div>
            </form>
          </div>

          <div className={formContainerClasses(1)}>
            <form>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Name</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input placeholder="Your Name.." className="p-1 px-2 outline-none w-full text-gray-800" name='name' onChange={handleChange} />
              </div>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Phone</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input placeholder="Your phone.." className="p-1 px-2 outline-none w-full text-gray-800" name='phone' onChange={handleChange} />
              </div>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Address</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input placeholder="Your address.." className="p-1 px-2 outline-none w-full text-gray-800" name='address' onChange={handleChange} />
              </div>
            </form>
          </div>

          <div className={formContainerClasses(2)}>
            <form>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Theme Color</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input placeholder="Theme color.." className="p-1 px-2 outline-none w-full text-gray-800" name='themeColor' onChange={handleChange} />
              </div>
              <label className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Font family</label>
              <div className="bg-white my-2 p-1 border border-gray-200 rounded">
                <input placeholder="Font family.." className="p-1 px-2 outline-none w-full text-gray-800" name='fontFamily' onChange={handleChange} />
              </div>
            </form>
          </div>


          <div className={formContainerClasses(3)}>
            <ul>
              <li>Email: {formData.email}</li>
              <li>Name: {formData.name}</li>
              <li>Address: {formData.address}</li>
              <li>Phone: {formData.phone}</li>
              <li>Theme color: {formData.themeColor}</li>
              <li>fomt family: {formData.fontFamily}</li>
            </ul>
          </div>
        </div>

        <div className='flex'>
          <button className={previousbtnClasses} onClick={() => setStep(step - 1)}>Previous</button>
          <button className={nextbtnClasses} onClick={() => setStep(step + 1)}>Next</button>
          <button className={submitbtnClasses} onClick={handleSubmit}>Submit</button>
        </div>

      </div>
    </>
  )
}

export default MultistepForm