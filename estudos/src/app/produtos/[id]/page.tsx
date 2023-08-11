import Link from 'next/link'
import React from 'react'
import style from '@/app/styles/produto.module.css'

export default function Produto({params}:{
    params:{ id: number }
}) {
    var id = params.id
  return (
    <div className='container'>
        <h1>Produto: {id}</h1>
        <div className={style.link}>
        <Link href={`/produtos/${id >0 ? id-1 : id=1}`}>VOLTAR</Link>
        <Link href={`/produtos/${id >0 ? ++id : id=1}`}>Próximo</Link>
        </div>
        <Link href={`/`}>Inicio</Link>
    </div>
  )
}
