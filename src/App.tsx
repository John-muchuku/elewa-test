import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>

        {/* <Route index element = {<Landing/>}/>
        <Route path="/Animals" element = {<Animal/>}/> */}
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
