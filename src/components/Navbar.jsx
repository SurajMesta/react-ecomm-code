import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav1">
             <Link to="#" className="navbar-brand">
                 <i className="fab fa-react fa-2x" id="ic1"></i>
             </Link>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#myDiv">
                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="navbar-collapse collapse" id="myDiv">
                    <ul className="navbar-nav">
                     <li className='nav-item ' id="li1"><Link className="nav-link text-light" to={"/"} style={{fontFamily:'oswald',fontSize:'1.5rem'}}>E-Commerce</Link></li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/cart" className="btn btn-md btn-info"><i className="fas fa-cart-arrow-down fa-2x mr-2"></i><span style={{fontFamily:'oswald'}}>My-Cart</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}





