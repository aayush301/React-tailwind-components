import React from 'react'
import Error from '../components/alerts/Error';
import Info from '../components/alerts/Info';
import Success from '../components/alerts/Success'
import Warning from '../components/alerts/Warning';

const AlertsDemo = () => {
  const successMsg = "Congratulations!! Account registered successfully!";
  const infoMsg = "This channel is archived by the owner!";
  const warningMsg = "Your image size is too large!";
  const errorMsg = "This email is already in use!";

  return (
    <>
      <h1 className='m-8'>Alerts</h1>
      <Success msg={successMsg} />
      <Info msg={infoMsg} />
      <Warning msg={warningMsg} />
      <Error msg={errorMsg} />
    </>
  )
}

export default AlertsDemo