import Link from "next/link"
import style from '@/app/styles/produto.module.css'
import Image from "next/image";

async function produtosId<t>(){
     const req = await fetch('https://jsonplaceholder.typicode.com/photos')
     const data = await req.json()
     return data;
    
}
export default async  function Produtos<t>({params}:{
  params:{id: number}
}) {
  const produto = await produtosId()
  return (
    <div >
      <h1>Produtos</h1>
      <div className={style.link}>
      <Link href={`/produtos/${params.id+1}`} >Próximo</Link>
      </div>
      <div className={style.cont}>
         {
          produto.map(({id, title, url}:{
            id: string |number,
            title: string,
            url: string
          })=>(
            <Link href={`/produtos/${id}`} key={id}>
              <h1>{title}</h1>
              <Image src={url} alt={title} width={400} height={400}/>
              <p>Descrição: {title}</p>
            </Link>
          )
         
          )
          } 
      </div>
          
      </div>


  )
}
