import React from 'react'
import {Link} from 'react-router-dom'

export default class Pnf extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 className="jumbotron text-center">
                    404 Page Not Found!!!!!
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/"> <button className="btn btn-md btn-danger">Return To Home</button></Link>
                   
                    
                    </h3>

            </div>
            
        )
    }
}
