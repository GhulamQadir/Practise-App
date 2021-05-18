import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'

class Links extends React.Component{
    render(){
        return(
            <div>
                <p><span className="categories">Categories:</span>
                <Link className="itemLink" to="#">Shalwar Kameez</Link>
                <Link className="itemLink" to="#">Paint Shirt</Link>
                <Link className="itemLink" to="#">Coat Paint </Link>
                <Link className="itemLink" to="#">Twinset</Link>
                <Link className="itemLink" to="#">Waistcoat</Link>
                <Link className="itemLink" to="#">Bridal Dress</Link>
                </p>
                </div>
        )
    }
}
export default Links;