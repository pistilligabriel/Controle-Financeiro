import React from 'react'

export default function Cards(props) {
    return (
        <div className='flex flex-col w-72 h-96 border-2 border-slate-200 rounded gap-5'>
            <div>
                <h1 className=' w-64 flex  justify-center text-slate-50 text-xl'> Mês Controle: {props.mes}</h1>
            </div>
            <div>
                <h1 className=' w-64 flex justify-start text-slate-50 text-xl'>Receita: {props.receita}</h1>
            </div>
        </div>
    )
}
