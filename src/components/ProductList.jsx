    import React from 'react'
    import {Title} from './Title'
    import Product from './Product'
    import {ProductConsumer} from "../context";


    export default class ProductList extends React.Component{
        render(){
            return(
                <React.Fragment>
                    <Title name="our" prod="Products"/>

                    <div className="row ">

                        <ProductConsumer>
                            {(value)=>{
                                return(
                                    value.products.map((item)=>{
                                        return(
                                            <Product key={item.id} products={item}/>
                                        )
                                    })
                                )

                            }}
                        </ProductConsumer>

                    </div>




                </React.Fragment>




            )
        }

    }