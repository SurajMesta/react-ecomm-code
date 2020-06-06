import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Pnf from './components/Pnf'
import Details from "./components/Details";
import Modal from './components/Modal'
import { Route, Switch} from 'react-router-dom'

class App extends React.Component{
  render(){

    return(
       <React.Fragment>
           <Navbar/>


               <Switch>

                   <Route exact path="/" component={ProductList}/>
                   <Route exact path="/cart" component={Cart}/>
                   <Route exact path="/details" component={Details}/>
                   <Route exact path="**" component={Pnf}/>

               </Switch>
               <Modal/>
       </React.Fragment>








    )
  }
}

export default App;
