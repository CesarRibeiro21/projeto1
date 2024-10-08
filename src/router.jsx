
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/app';
import Contato from './pages/contato';
import Notfund from './pages/not-Fund';

export default function Navegação(){

    return(
        <BrowserRouter>
         <Routes>
             <Route path='/' element={<App/>}/>
             <Route path='/contato' element={<Contato/>}/>
          
            <Route path='*' element={<Notfund/>}/>
          </Routes>
         </BrowserRouter>
    )
}