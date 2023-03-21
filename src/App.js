import React from 'react'
import Create from './components/create/create'
import Read from './components/read/read';
import './App.css';

export default function App() {
    return(
        <div className='main'>
            <div>
                <h3>React Crud Operation</h3>
            </div>
            <div>
                <Create />
            </div>
            <div style={{marginTop: 20}}>
                <Read />
            </div>
        </div>
    );
}