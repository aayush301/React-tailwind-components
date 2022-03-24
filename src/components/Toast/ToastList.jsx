import React from 'react'
import ReactDom from 'react-dom';
import Toast from './Toast';

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
}


const ToastList = ({ toastList, deleteToast }) => {
  const getToast = (toast) => {
    return <Toast
      key={toast.id}
      type={toast.type}
      msg={toast.msg}
      position={toast.position}
      onClose={() => deleteToast(toast.id)}
      hasCloseBtn={toast.hasCloseBtn}
      autoClose={toast.autoClose}
      autoCloseTimeout={toast.autoCloseTimeout} />
  }

  const positions = ["top-right", "top-left", "bottom-right", "bottom-left"];
  const getPositionClasses = (position) => {
    switch (position) {
      case "top-right": return "top-0 right-0 sm:top-4 sm:right-4";
      case "top-left": return "top-0 left-0 sm:top-4 sm:left-4";
      case "bottom-right": return "right-0 sm:bottom-4 sm:right-4";
      case "bottom-left": return "bottom-0 left-0 sm:bottom-4 sm:left-4";
    }
  }

  return (
    <>
      <Portal>
        {positions.map(position => (
          <div key={position} className={`fixed flex flex-col sm:gap-1 z-[1000] ${getPositionClasses(position)}`}>
            {toastList.filter(toast => toast.position == position).map((toast) => (
              getToast(toast)
            ))}
          </div>
        ))}
      </Portal>
    </>
  )
}

export default ToastList