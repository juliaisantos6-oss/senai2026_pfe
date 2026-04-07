import {Link} from 'react-router-dom'
import './principal.css'


export default function Principal(){
    return(
      <div className='container'>
        <header>
            <h1>Pastelão do Sesi</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
        </header>

        <section className='banner'>
        <img src="https://i.pinimg.com/736x/ec/b9/40/ecb940f52ea9a41f8e1b615543bc1c47.jpg" alt="Imagem principal" />
        <div className='texto-banner'>
            <h2>Bem vindo ao Pastelão do Sesi</h2>
            <p>O melhor pastel da região</p>
        </div>
        </section>

        <section className='cards'>
            <div>
                <h3>Pastel com cobertura</h3>
                <p>Pastelão com cobertura de creamcheese</p>
            </div>
            <div>
                <h3>Pastel sem recheio</h3>
                <p>Pastelão sem recheio, acompanha um copo de agua</p>
            </div>
        </section>

        <footer>
            <p>2026 - Todos os direitos reservados - Pastelão do Sesi</p>
        </footer>
      </div> 
    )
}