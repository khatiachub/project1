import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Apartament from './components/Apartament';
import Contact from './components/Contact';
import Rio from './components/Rio'
import Book from './components/Book'
import RoomDescription from './RoomDescription';
import Root from './Root';
import './components/fonts/Fonts.css'
import 'normalize.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
  return(
    <HashRouter>
      <Routes>
    <Route path='/' element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path='/Our Apartament'>
       <Route index={true}  element={<Apartament/>}/>
       <Route  path='/Our Apartament/:id' element={<RoomDescription/>}/>
    </Route>
    <Route path='/Rio' element={<Rio/>}/>
    <Route path='/Contact'element={<Contact/>}/>
    <Route path='/Book' element={<Book/>}/>
  </Route>
  </Routes>
  </HashRouter>
  )
}
root.render(<App/>)
