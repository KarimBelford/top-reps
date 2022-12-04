import React from "react";
import { Routes, Route} from "react-router-dom";  
import Home from "./routes/home/HomeRoute";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";

const Shop = () => {
  return <h1> Shop page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path = '/' element ={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path = 'auth' element= {<Authentication/>}/>
      </Route>
    </Routes>
  )
};


export default App;
