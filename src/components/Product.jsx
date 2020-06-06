import React from 'react'
import {Link } from 'react-router-dom'
import {ProductConsumer} from "../context";

export default class Product extends React.Component{

    render(){
        const {id,title,img,price,company,info,inCart,count,total }= this.props.products

        return(

            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-12">
                <div className="card bg-light">
                    <ProductConsumer>
                        {(value)=> (
                            <div className="img-container text-center" style={{margin:"10px 0px"}} onClick={()=>{
                               value.handleDetail(id)
                            }}>
                                <Link to={"/details"}>
                                    <img src={img} alt="img" style={{width:"150px",height:"150px"}}/>
                                </Link>
                                <button className="btn-cart"
                                        disabled={inCart ? true:false}


                              onClick={()=>{
                                  value.addtoCart(id)
                                  value.openmodal(id)
                              }}  >{inCart? (<span className="oswald" style={{padding:"2px"}}>In-Cart</span>):(<span className="oswald" style={{padding:"2px"}}><i className="fas fa-cart-plus " id="cart-ic"></i> AddtoCart</span>)} </button>
                            </div>
                        )}

                    </ProductConsumer>


                    <div className="card-footer" id='cd-foot'>
                        <span className="oswald ">{title}</span>
                        <span className="oswald">Price:&nbsp;&#8377; &nbsp; {price}</span>

                    </div>

                </div>
            </div>












        )

    }
}