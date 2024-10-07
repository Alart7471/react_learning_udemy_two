import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/Register";
import FaqPage from "./pages/Faq";
import AboutPage from "./pages/About";
import Header from "./components/Header";
import Footer from './components/Footer';
import NotFound from "./components/NotFound";
// import './App.css';
// import './style/index.scss';
import './style/App.scss';

function App() {
  // console.log(window.location)
  // console.log(
  //   `Current URL: ${window.location.href} ${
  //     window.location.search
  //       ? `?${window.location.search.slice(1)}`
  //       : ""
  //   }`
  // );
  return (
    <div className="App">
    <Header />
    <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/category/*" element={<HomePage />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</div>
    //with login,register
    // <div className="App">
    //   <Header />
    //   <div >
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/login" element={<LoginPage />}></Route>
    //       <Route path="/register" element={<RegisterPage />}></Route>
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;