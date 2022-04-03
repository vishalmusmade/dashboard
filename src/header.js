import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header' >
        <img src={require("./header.jpeg")} alt="header image" />
    </div>
  )
}
