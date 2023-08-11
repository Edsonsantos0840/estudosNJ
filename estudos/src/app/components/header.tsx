import Link from "next/link";
import style from '@/app/styles/header.module.css'


export default function Hed() {
  return (
    <div className={style.container}>
        <h1>Minha Loja</h1>
       <div className={style.inp}>
       <input type="search" name="pesquisar" id="pesquisar" placeholder="Pesquisar" />
       <button>pesquisar</button>
       </div>
       <nav>
        <Link href='/'>Inicio</Link>
        <Link href='/sobre'>sobre</Link>
        <Link href='/produtos'>produtos</Link>
        <Link href='/contatos'>contatos</Link>
       </nav>
    </div>
  )
}
