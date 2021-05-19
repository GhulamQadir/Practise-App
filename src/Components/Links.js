import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'

class Links extends React.Component{
    render(){
        return(
            <div>
                <p><span className="categories">Categories:</span>
                <Link className="itemLink" to="/shalwar-kameez">Shalwar Kameez</Link>
                <Link className="itemLink" to="/pant-shirts">Pant Shirt</Link>
                <Link className="itemLink" to="/coat-pant">Coat Paint </Link>
                <Link className="itemLink" to="#">Twinset</Link>
                <Link className="itemLink" to="#">Waistcoat</Link>
                <Link className="itemLink" to="#">Bridal Dress</Link>
                </p>
                </div>
        )
    }
}
export default Links;