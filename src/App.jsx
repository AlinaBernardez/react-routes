import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Resume from '../src/components/Resume';
import Projects from '../src/components/Projects';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/resume' element={<Resume/>} />
                <Route path='/projects' element={<Projects/>} />
            </Routes>
        </Router>
    )
}

export default App;