import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App