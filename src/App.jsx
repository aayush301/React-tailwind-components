import { BrowserRouter, Routes, Route } from "react-router-dom"
import DropdownDemo from "./pages/DropdownDemo"
import Home from "./pages/home"
import NavbarDemo from "./pages/NavbarDemo"
import SidebarDemo from "./pages/SidebarDemo"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavbarDemo />} />
          <Route path="/sidebar" element={<SidebarDemo />} />
          <Route path="/dropdown" element={<DropdownDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
