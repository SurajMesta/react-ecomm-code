import React from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Modal extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    let{modaldisp,closemodal}=value
                    const{title,img,price,company}=value.modalvalue
                     
                    if(!modaldisp){
                        return null
                    }
                    else{
                        return(
                            <div className="outer-container">
                              <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-12"></div>
                                    <div className="col-md-4 col-12 text-center">
                                         <div className="card card-sm">
                                      <div className="card-title">
                                      <span className="oswald">Item Added to Cart:</span> <span className="perm-marker">{title}</span>
                                      </div>
                                      <div className="card-body">
                                          <img src={img} alt="" className="img-fluid" />
                                        <span className="oswald">Price:</span>&nbsp;<span>&nbsp;&#8377;&nbsp;{price}</span>
                                        <p  className="perm-marker">Manufacturer:{company}</p>
                                      </div>
    
                                      <div className="card-footer">
                                          <Link to={'/'} className="btn btn-sm btn-warning"> <span className="oswald" style={{color:'#000'}} onClick={()=>{
                                            value.closemodal()
                                          }} >To-Shop</span></Link>
                                          <Link to={'/cart'} className="btn btn-sm btn-success"><span className="oswald" style={{color:'#000'}} onClick={()=>{
                                           value.closemodal()
                                          }} >To-Cart</span></Link>
                                      </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
      
                          </div>
                        )

                    }
                 
                }
                  
                }
            </ProductConsumer>
          
        )       
    }
}