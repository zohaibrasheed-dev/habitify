import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
