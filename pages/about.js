import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import WantToContribute from '../components/WantToContribute'
function about() {
    return (
        <div className="home">
            <Navbar></Navbar>
            <About></About>
            <WantToContribute></WantToContribute>
        </div>
    )
}

export default about
