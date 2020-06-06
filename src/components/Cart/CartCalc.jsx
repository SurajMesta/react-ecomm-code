import React from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'

export default class CartCalc extends React.Component{
    render(){
        return(
           <ProductConsumer>
               {(value)=>{ 
                   const {subTotal,cartTotal,cartTax}=value


               return(
                <div className="container  text-right " >
                <React.Fragment>
                    <div className="inn-div" style={{marginRight:"35px"}}>
                    <Link to='/'>
                 <button className="btn btn-md btn-danger" onClick={()=>{
                     value.clearCart()
                 }}><span>Clear Cart</span></button>
                 </Link>
               <p className="oswald text-capitalize">sub-Total:&nbsp;&nbsp;&#8377;&nbsp;&nbsp;{subTotal}</p>
               <p className="oswald text-capitalize">tax:&nbsp;&nbsp;&#8377;&nbsp;&nbsp;{cartTax}</p>
               <p className="oswald text-capitalize">total:&nbsp;&nbsp;&#8377;&nbsp;&nbsp;{cartTotal}</p>
                    </div>
          

                </React.Fragment>
             
               
            
            </div>
               )


               }}
           </ProductConsumer>
               
          
        )
    }
}