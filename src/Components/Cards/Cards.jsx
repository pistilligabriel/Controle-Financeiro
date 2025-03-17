import React from 'react'
import "../Cards/Cards.css"

export default function Cards(props) {
    return (
        <div className='flex flex-col w-72 h-64 border-2 border-slate-200 rounded gap-4 card items-start'>
            <div>
                <h1 className=' w-[100%] flex  text-slate-50 text-xl adjust '> Mês Controle: {props.mes}</h1>
            </div>
            <div>
                <h1 className=' w-[100%] flex text-slate-50 text-xl adjust'>Receita: R${props.receita}</h1>
            </div>
            <div>
                <h1 className=' w-[100%] flex text-slate-50 text-xl adjust'>Despesa: R${props.despesa}</h1>
            </div>
            <div>
                <h1 className=' w-[100%] flex text-slate-50 text-xl adjust'>Diferença: R${props.diferenca}</h1>
            </div>
            <div className=' flex w-[100%] justify-center self-end margin'>
               <button type="button" onClick={()=> {
                console.log("Cliquei")
               }} className='background w-26 cursor-pointer rounded text-xl text-slate-50 shadow-lg shadow-black'>Visualizar</button>
            </div>
        </div>
    )
}
