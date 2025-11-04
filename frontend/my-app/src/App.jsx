import React from 'react'
import Card from './component/card'
import Navbar from './component/navbar'
import './App.css'
import Count1 from './component/Count1'

function App() {
  return (
    <>
      <Navbar/>
    <div class="cards">
      <Card name="Atul" edu="10"/>
      <Card name="Rahul" edu="11"/>
      <Card name="Vijay" edu="12"/>
    </div>
    <div>
      <Count1/>
    </div>
    </>
  )
}

export default App
