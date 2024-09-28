import React from "react";
import { Routes, Route, Link } from "react-router-dom"
// import Login from "../Login/Login";
import { Login } from '../pages/Login'
function Router(){
    return (
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        <Routes>
            <Route path='/login'element={<Login />}>
                <h1>Login</h1>
            </Route>
            <Route path="/register">
                Register
            </Route>
        </Routes>
        </>
    )
}

export default Router