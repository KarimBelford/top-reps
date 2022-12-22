import { Routes, Route} from "react-router-dom";
import React,{useEffect} from "react";
import {useDispatch} from 'react-redux'
import { onAuthStateChangedListener,createUserDocFromAuth} from "./utils/firebaseUtils/firebaseUtils";
import { setCurrentUser } from "./store/user/user.action";
import Home from "./routes/home/HomeRoute";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from './routes/checkout/Checkout'


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
        if(user){
            
            createUserDocFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubcribe;
  }, [dispatch])

  return (
    <Routes>
      <Route path = '/' element ={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path = 'auth' element= {<Authentication/>}/>
        <Route path= 'checkout' element = {<Checkout/>}/>
      </Route>
    </Routes>
  )
};


export default App;
