import React from 'react'
import {storeProduct,detailedProduct} from './data'

const ProductContext= React.createContext();

 class ProductProvider extends React.Component{

     state={
         products:[],
         detailedProduct:detailedProduct,
         cart:[],  //to be set to []
         modaldisp:false,
         modalvalue:detailedProduct,
         subTotal:0,
         cartTotal:0,
         cartTax:0
     }

     getItem=(id)=>{
         const product= this.state.products.find(item=> item.id === id)
         return product

     }

     handleDetail=(id)=>{
         console.log(`Hello the Clicked item id is ${id}`)
         const product= this.getItem(id)
         console.log(product)
         this.setState({detailedProduct:product})



     }

    // Logic of add to Cart
     addtoCart=(id)=>{
         console.log(`Hello from Cart the Id is ${id}`)
        let tempproducts=[...this.state.products]
        let index= tempproducts.indexOf(this.getItem(id))
        let product=tempproducts[index]
        product.inCart=true
        product.count=1
        let price=product.price
        product.total=product.price
   

        this.setState(()=>{
            return{products:tempproducts,cart:[...this.state.cart,product]}
        },()=>{
            this.addTotals()
        })

     }


     //open modal logic 

     openmodal=(id)=>{
         let product=this.getItem(id)
         console.log('The Fetched data is..')
         console.log(product)
         this.setState({
             modalvalue:product,
             modaldisp:true

         })

     }
    
     //close modal
     closemodal=()=>{
         this.setState({modaldisp:false})
     }

     //increment count

     incrementCount=(id)=>{
         let tempCart=[...this.state.cart]
         let product=tempCart.find((item)=> item.id==id)
         let index=tempCart.indexOf(product)
         let selectedProduct= tempCart[index]

         selectedProduct.count+=1
         selectedProduct.total= selectedProduct.count* selectedProduct.price
         this.setState(()=>{
             return { cart:[...tempCart]}
         },()=>{
             this.addTotals()
         })
     }

     decrementCount=(id)=>{
        let tempcart=[...this.state.cart]
        let product=tempcart.find((item)=> item.id==id)
        let index= tempcart.indexOf(product)
        let selectedProduct= tempcart[index]

        selectedProduct.count-=1

        if(selectedProduct.count === 0){
         
            this.removeItem(id)
        }

        else{
            selectedProduct.total= selectedProduct.count* selectedProduct.price
            this.setState(()=>{
                return{cart:[...tempcart]}
            },()=>{
                this.addTotals()
            })
        }

        


     }

     removeItem=(id)=>{
         let tempCart=[...this.state.cart]
         let tempProducts=[...this.state.products]

         tempCart=tempCart.filter((item)=> item.id!==id)
         console.log(tempCart)

         let index= tempProducts.indexOf(this.getItem(id))
         let removedItem= tempProducts[index]

         removedItem.inCart=false
        

         this.setState(()=>{
             return{    cart:[...tempCart],
                        products:[...tempProducts]
                    }
         
         },()=>{
             this.addTotals()
         })




        

     }


     clearCart=()=>{
       this.setState(()=>{
           return {cart:[]}
       },()=>{
           this.setProducts()
           this.addTotals()
       })
     }
       
     
     //logic for addtotals
     addTotals=()=>{
         let subTotal=0
         this.state.cart.map((item)=> subTotal+=item.total)
         console.log(subTotal)
         let temptax= subTotal*0.10
         let tax= parseFloat(temptax.toFixed(2))
         let total= tax+subTotal

         this.setState(()=>{
             return{subTotal:subTotal,
                     cartTax:tax,
                     cartTotal:total
                    }
         })
     }



 
  // setting data from the data.js
     setProducts=()=>{
         let products=[]
         storeProduct.forEach(item=>{
             const product={...item}
             products=[...products,product]
             this.setState({products})


         })


     }

     componentDidMount() {
         this.setProducts()

     }

     render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addtoCart:this.addtoCart,
                openmodal:this.openmodal,
                closemodal:this.closemodal,
                clearCart:this.clearCart,
                removeItem:this.removeItem,
                incrementCount:this.incrementCount,
                decrementCount:this.decrementCount

            }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}

const ProductConsumer= ProductContext.Consumer

export {ProductProvider, ProductConsumer}