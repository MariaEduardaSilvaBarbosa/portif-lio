
import './Main.css'
import Logo from '../../assets/perfil.png'
function Main(){

  return(

  <main className='main_eu'>
    <img className='perfil' src={Logo} alt=""/>

    <div className='txt'>
      <h2 >Olá</h2>
      <h1>Sou a Maria Eduarda</h1>
      <h3>Tenho 18 anos e sou estudante do curso Técnico em Informática no IFMS campus Naviraí</h3>
      <h4>Este portfólio é um reflexo das minhas ambições, determinação e busca contínua pelo conhecimento. Estou animada para o que o futuro reserva e as novas oportunidades que virão no meu caminho. Se você quiser saber mais sobre qualquer projeto ou conquista específica, fique à vontade para entrar em contato. Obrigada por visitar meu portfólio!</h4>
    </div>


  </main>

  )
}
export default Main