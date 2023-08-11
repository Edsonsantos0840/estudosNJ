import Link from 'next/link'
import React from 'react'
import style from '@/app/styles/produto.module.css'  
import Image from 'next/image'

async function mostraProduto(produtoId: any){
   const req = await fetch(`https://jsonplaceholder.typicode.com/photos/${produtoId}`)
   const data = await req.json()
   return data;
}

export default async function Produto<t>({params}:{
    params:{ id: number }
}) {
    var id = params.id
    const produto =await mostraProduto(id)
  return (
    <div className='container'>
        <h1>Produto: {produto.title}</h1>
        <div className={style.link}>
        <Link href={`/produtos/${id >0 ? id-1 : id=1}`}>VOLTAR</Link>
        <Link href={`/produtos/${id >0 ? ++id : id=1}`}>Próximo</Link>
        </div>
        <div>
          <h1>{produto.title}</h1>
          <Image src={produto.url} alt={produto.title} width={500} height={200}/>
          <p>Descrição: {produto.title}</p>
        </div>
        <div className={style.link}>
        <Link href={`/`} >Inicio</Link>  
        </div>
        
    </div>
  )
}
