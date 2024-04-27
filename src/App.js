import './App.css';
import H1 from './components/Home';
import R1 from './components/Register';
import SH from './components/Show';
import {  Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import D1 from './components/Delete1';
import D2 from './components/Donate';
import U1 from './components/Update';
import L1 from './components/login1';

import V1 from './components/Volunteer';
import { BrowserRouter } from 'react-router-dom';


function App({store}) {
    function Page({store}) {
          return (
          <BrowserRouter>
           <Routes>
           <Route path='/' element={<H1 />}/>
           <Route path='/reg' element={<R1 />}/>
           <Route path='/hom' element={<H1 />}/>
           <Route path='/sho' element={<SH />}/>
           <Route path='/del' element={<D1 />}/>
           <Route path='/upd' element={<U1 />}/>
           <Route path='/log' element={<L1 store={store}/>}/>
           <Route path='/don' element={<D2 />}/>
           
           <Route path='/vol' element={<V1 />}/>
          </Routes>
          </BrowserRouter>
          )
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={"image3.png"} className="App-logo" alt="logo" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          ONILINE DONATION MANAGEMENT SYSTEM
        </h2>
             </header>
             <div className="App-body">
             
             <Appbar store={store} />
              <Page  store={store}/>
              
       
      </div>
    </div>
  );
}

export default App;