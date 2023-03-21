import React from 'react'
import Create from './components/create/create'
import Read from './components/read/read';
import Update from './components/update/update';
import Delete from './components/delete/delete';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

export default function App() {
    return(
        <Router>
        <div className='main'>
            <div>
                <h3>React Crud Operation</h3>
            </div>
            <div>
                <Route path='/create' Component={Create}/>
                <Create />
            </div>
            <div style={{marginTop: 20}}>
                <Route path='/read' Component={Read}/>
                <Read />
            </div>

            <Route path='/update' Component={Update}/>
            <Route path='/delete' Component={Delete}/>
        </div>
        </Router>
    );
}