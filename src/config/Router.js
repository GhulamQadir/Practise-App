import React from 'react';
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Links from '../Components/Links';
import MainComponent from '../Components/MainComp'
import ShalwarKameez from '../Categories/ShalwarKameez';
import PantShirt from '../Categories/PantShirt';
import CoatPant from '../Categories/CoatPant';
// import Footer from '../components/Footer'
// import Product from '../components/Product'
// import About from '../components/About'
// import Contact from '../components/Contact'
import { BrowserRouter as Router, Route,  } from "react-router-dom";



class AppRouter extends React.Component{
    render(){
        return(
        <Router>
        <Route exact path="/" component={Header} /> 
        <Route exact path="/" component={Slider} /> 
        <Route exact path="/" component={Links} /> 
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/shalwar-kameez" component={ShalwarKameez} /> 
        <Route exact path="/pant-shirts" component={PantShirt} /> 
        <Route exact path="/coat-pant" component={CoatPant} /> 
        {/* <Route exact path="/" component={Footer} />  */}
        {/* <Route exact path="/product" component={Product} />  */}
        {/* <Route exact path="/about-us" component={About} />  */}
        {/* <Route exact path="/contact-us" component={Contact} />  */}
        </Router>
        )
    }
}
export default AppRouter;