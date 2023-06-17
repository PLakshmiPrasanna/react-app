import React from "react";
import Navbar from "./routingPages/Navbar";
import Home from "./routingPages/Home";
//import About from "./routingPages/About";
import Contact from "./routingPages/ContactUs";
import Success from "./routingPages/Success";
import Projects from "./routingPages/Projects"

import {Routes, Route } from "react-router-dom";
import FeaturedProjects from "./routingPages/FeaturedProjects";
import NewProjects from "./routingPages/NewProjects";

import Users from "./routingPages/Users";
import UserDetails from "./routingPages/UserDetails";

import Logout from "./routingPages/Logout";
import Login from "./routingPages/Login";
import PrivateRoute from "./routingPages/PrivateRoute";


const LazyLoadAbout = React.lazy(()=> import("./routingPages/About") );

function App () {

    return (
   
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<React.Suspense fallback="Loading.."><LazyLoadAbout/></React.Suspense>} />
            <Route path="/contactUs" element={<Contact/>} />
            <Route path="/success" element={<Success/>} />

            <Route path="/projects" element= {<Projects/>} >
                <Route index element={<FeaturedProjects/>} />
                <Route path="featured" element={<FeaturedProjects/>}/>
                <Route path="new" element={<NewProjects/>}/>
            </Route>

            <Route path="/users" element={<Users/>} />
            <Route path="/users/:userId" element={
                                                    <PrivateRoute>
                                                        <UserDetails/>
                                                    </PrivateRoute> } />
           


            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

        </Routes>

    
    )
}

export default App;
