import React from 'react'
import Create from './components/create/create'
import Read from './components/read/read';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './components/update/update'
import './App.css';

function App() {
    return(
        <BrowserRouter>
            <div className='main'>
                <div>
                    <h3>
                        Employment Table V3
                    </h3>
                </div>
                <Routes>
                    <Route path='/' element={<Create />} />
                    <Route path='/read' element={<Read />} />  
                    <Route path="/update" element={<Update />} />
                </Routes>
            </div>
            
        </BrowserRouter>
    
    );
}
export default App;