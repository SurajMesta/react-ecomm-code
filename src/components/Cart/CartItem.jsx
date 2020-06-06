import React from 'react'

function CartItem({item,value}){
    const{id,img,title,price,company,count,total}=item
    return(
        <div className="container-fluid">
            <div className="row" style={{marign:'5px 0px'}}>
                <div className="col-12 col-lg-2 text-center">
                    <img src={img} alt="img1" style={{width:'120px',height:'120px', margin:'5px 0px'}}/>
                </div>

                <div className="col-12 col-lg-2 text-center">
                    <span className="d-lg-none oswald ">NameOfProduct: </span> <span className="perm-marker">{title}</span>
                </div>

                <div className="col-12 col-lg-2 text-center">
               <span className="d-lg-none oswald">Price</span> <span>&nbsp;&#8377;&nbsp; {price}</span>
                </div>

                <div className="col-12 col-lg-2 text-center">
                 <div className="container d-block">
                     <span className="btn btn-md btn-warning" onClick={()=>{
                         value.decrementCount(id)
                     }} ><strong>-</strong></span>
                     <span style={{margin:'0px 5px'}}>{count}</span>
                     <span className="btn btn-md btn-success" onClick={()=>{
                         value.incrementCount(id)
                     }} ><strong>+</strong></span>
                 </div>
                 </div>

                 <div className="col-12 col-lg-2 text-center">
                     <button className="fas fa-trash text-danger" style={{border:"none"}} onClick={()=>{
                         value.removeItem(id)
                     }}></button>
                 </div>

                 <div className="col-12 col-lg-2 text-center">
                     <span className="d-lg-none"> Total:  </span><span>&nbsp;&#8377;&nbsp; {total}</span>
                 </div>
            </div>

          


        </div>


     
    )
}

export default CartItem