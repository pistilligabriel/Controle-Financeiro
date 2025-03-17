import React from 'react'
import HeaderBar from '../Components/HeaderBar/HeaderBar'
import Cards from '../Components/Cards/Cards'

export default function Home() {
  return (
    <div>
        <div>
        <HeaderBar/>
        </div>
        <div>
          <Cards mes="Março/2025"/>
        </div>
    </div>
  )
}
