import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import About from './About/About';
import Social_impact from './Social_impact/Social_impact';
import Invest from './Invest/Invest';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>

         <Route index  element = {<About/>}/>
         <Route  path = "/social_impact" element = {<Social_impact/>}/>
         <Route  path = "/invest" element = {<Invest/>}/>




      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
