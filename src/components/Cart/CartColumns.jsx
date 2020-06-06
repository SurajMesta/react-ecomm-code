import React from 'react'

export default function CartColumns(){
    return(
        <div className="container-fluid d-none d-lg-block" style={{margin:'5px 0px'}}>
            <div className="row">
                <div className="col-10 col-lg-2 text-center">
                    <span className="oswald" >Products</span>
                </div>

                <div className="col-10 col-lg-2 text-center">
                    <span className="oswald">Name of the Product</span>
                </div>

                <div className="col-10 col-lg-2 text-center">
                    <span className="oswald">Price</span>
                </div>

                <div className="col-10 col-lg-2 text-center">
                    <span className="oswald">Quantity</span>
                </div>

                <div className="col-10 col-lg-2 text-center">
                    <span className="oswald">Remove</span>
                </div>

                <div className="col-10 col-lg-2 text-center">
                    <span className="oswald">Total</span>
                </div>

            </div>
        </div>
    )
}