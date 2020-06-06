import React from 'react'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartColumns from './CartColumns'
import CartList from './CartList'
import {Title} from '../Title'
import CartCalc from './CartCalc'


export default class Cart extends React.Component{
    render(){
        return(
            <ProductConsumer>
            {(value)=>{
                const {cart}=value

                if(cart.length>0){
                    return(
                        <React.Fragment>
                              <Title name="Your" prod="cart"/>
                              <CartColumns/>
                              <CartList value={value}/>
                              <CartCalc value={value}/>
               
                        </React.Fragment>
                    )
                  
                }
                else{
                    return <EmptyCart/>
                }

            }}

        </ProductConsumer>
        )
        
       
    }
}