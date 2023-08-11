import Link from "next/link";
import style from '@/app/styles/footer.module.css'
export default function Footer() {
    return (
      <footer className={style.container}>
          <h1>Minha Loja</h1>
         <nav>
          <Link href='/'>Inicio</Link>
          <Link href='/sobre'>sobre</Link>
          <Link href='/produtos'>produtos</Link>
          <Link href='/contatos'>contatos</Link>
         </nav>
      </footer>
    )
  }
  