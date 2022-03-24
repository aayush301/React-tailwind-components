import { useState } from "react"

const useToast = () => {
  const [toastList, setToastList] = useState([]);

  const addToast = (toast) => {
    toast.id = Math.floor(Math.random() * 10000);
    toast.position = toast.position || "top-right";
    toast.type = toast.type || "success";
    toast.msg = toast.msg || toast.type;
    toast.autoCloseTimeout = toast.autoCloseTimeout || 5000;

    toast.position.startsWith("top") ? (
      setToastList([toast, ...toastList])
    ) : (
      setToastList([...toastList, toast])
    )
  }

  const deleteToast = id => {
    setToastList(toastList => toastList.filter(toast => toast.id !== id));
  }

  return [toastList, addToast, deleteToast];
}

export default useToast