import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Courses from "./components/Courses/Courses.jsx"
import Header from  "./components/Layout/Header/Header.jsx"
import Footer from  "./components/Layout/Footer/Footer.jsx"
import Login from "./components/Auth/Login.jsx"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
