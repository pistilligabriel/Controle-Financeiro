import React from 'react'
import HeaderBar from '../../Components/HeaderBar/HeaderBar'
import Cards from '../../Components/Cards/Cards'
import "../Home/Home.css"

export default function Home() {
  return (
    <div>
        <div>
        <HeaderBar/>
        </div>
        <div className='margin-home'>
          <button type="button" onClick={()=> {
                console.log("Cliquei")
               }} className='background-new shadow-xl shadow-gray-900 rounded w-20 cursor-pointer text-lg text-slate-50 '>Novo</button>
        </div>
        <div className="grid grid-cols-3 gap-15 grid-flow-row cards">
          <Cards mes="Março/2025"/>
          <Cards mes="Abril/2025"/>
          <Cards mes="Maio/2025"/>
          <Cards mes="Junho/2025"/>
        </div>
    </div>
  )
}
