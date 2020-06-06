import React from 'react'


export  const Title=({name,prod})=>{
    return(
        <div className="text-center ">
            <h2  style={{fontFamily:'Permanent Marker'}} >{name} {prod}</h2>
        </div>

    )
}