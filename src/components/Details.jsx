    import React from 'react'
    import {ProductConsumer} from "../context";
    import {Link} from 'react-router-dom'


    export default class Details extends React.Component{
        render(){
            return(
              <ProductConsumer>
                  {(value)=>{
                      const {id,company,img,inCart,info,price,title}=value.detailedProduct
                      return(
                             <React.Fragment>
                                 <div className="row text-center">
                                     <div className="col-12">
                                         <p className="text-center perm-marker text-primary " style={{fontSize:'1.8rem'}}>{title}</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-2 col-12"></div>
                                  <div className="col-md-4 col-12 text-center">
                                      <img src={img} alt="im1" style={{width:'250px',height:'250px'}}/>
                                      <br/>
                                      <br/>
                                      <span className="perm-marker text-muted" style={{fontSize:'1.2rem'}}>Manufactured By:</span>
                                      <span className="perm-marker text-muted" style={{fontSize:'1.2rem'}}> {company}</span>
                                  </div>

                                     <div className="col-md-4 col-12 ">
                                         <span className="oswald " style={{fontSize:'1.2rem'}}><span >Title: {title}</span></span>
                                         <br/>
                                         <br/>
                                         <p className="oswald text-uppercase" style={{fontSize:'1.1rem'}}>Description:</p>
                                         <p className="text-justify">{info}</p>

                                       <span className="oswald">Price:&nbsp;&#8377;&nbsp;{price}</span>
                                        <br/>
                                        <br/>
                                        <div >
                                            <button className="btn btn-primary" disabled={inCart?true:false} style={{padding:'8px 25px',backgroundColor:'#679b9b'}}  onClick={()=>{
                                                value.addtoCart(id)
                                                value.openmodal(id)
                                            }}>
                                                {inCart? (<span style={{fontSize:'1.2rem',color:'snow'}}>In-Cart</span>):(<i className="fas fa-cart-plus"  ><span className="oswald" style={{fontSize:'1.2rem',color:'#e5e5e5'}}>Add-to-cart</span></i>)}


                                            </button>

                                            <Link to={"/"} className="btn btn-warning"><span style={{fontSize:'1.2rem',color:'#3f3f44'}} className="oswald">Back-to-products</span></Link>
                                        </div>
                                     </div>


                                 </div>
                             </React.Fragment>





                      )

                  }}
              </ProductConsumer>
            )
        }
    }