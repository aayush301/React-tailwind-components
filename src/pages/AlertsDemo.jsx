import React, { useState } from 'react'
import Alert from '../components/Alert';

const AlertsDemo = () => {
  const successMsg = "Congratulations!! Account registered successfully!";
  const infoMsg = "This channel is archived by the owner!";
  const warningMsg = "Your image size is too large!";
  const errorMsg = "This email is already in use!";

  const [showSuccess, setShowSuccess] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);


  return (
    <>
      <h1 className='m-8'>Alerts</h1>
      <div className="m-8">

        <div className='my-4'>
          {showSuccess && <Alert type="success" msg={successMsg} onClose={() => setShowSuccess(false)} />}
          <button className='bg-teal-500 text-white p-2 rounded-md' onClick={() => setShowSuccess(true)}>Show Success</button>
        </div>

        <div className='my-4'>
          {showInfo && <Alert type="info" msg={infoMsg} onClose={() => setShowInfo(false)} />}
          <button className='bg-teal-500 text-white p-2 rounded-md' onClick={() => setShowInfo(true)}>Show Info</button>
        </div>

        <div className='my-4'>
          {showWarning && <Alert type="warning" msg={warningMsg} onClose={() => setShowWarning(false)} />}
          <button className='bg-teal-500 text-white p-2 rounded-md' onClick={() => setShowWarning(true)}>Show Warning</button>
        </div>

        <div className='my-4'>
          {showError && <Alert type="error" msg={errorMsg} onClose={() => setShowError(false)} />}
          <button className='bg-teal-500 text-white p-2 rounded-md' onClick={() => setShowError(true)}>Show Error</button>
        </div>
      </div>

    </>
  )
}

export default AlertsDemo