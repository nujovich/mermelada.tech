import React from 'react'
import 'firebase/auth'
import './dashboard.style.css'

import Navbar from './Navbar/Navbar'
import Blog from './Blog/Blog'

function Dashboard() {
  
  return (
    <div className='container-dashboard'>
        <Navbar />
        <Blog />
    </div>
  )
}

export default Dashboard