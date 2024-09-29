import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import Header from "./components/Header";
import Footer from './components/Footer';
import NotFound from "./components/NotFound";
// import './App.css';
// import './style/index.scss';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
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