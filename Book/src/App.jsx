import React from 'react'
import Book from './Components/book'
import './App.css'
import Navebar from './Components/Navebar'
function App() {

  return (
    <>
    <Navebar/>
    <div id='flex'>
     <Book Bname="Maths" Price="100"/>
     <Book Bname="Physics" Price="90"/>
     <Book Bname="Chemistry " Price="100"/>

    </div>
    </>
  )
}

export default App
