import './Footer.css'
import Logo from '../../assets/mee.png'
function Footer(){
    return(
        <footer>
            
           <div className='info'>
           <div className='rodapelogo'>
         </div>
         <img className='me' src={Logo} alt=""/>
          <article className='conteudo'>
            <h3>Contato</h3>
            <a className='l' href='#'>Email: maria.barbosa4@estudante.ifms.edu.br</a>
            <dd></dd>
             <a className='l' href='#'>Telefone: 67998871244</a>
            
            
          </article>

          <article className='conteudo'>
            <h3>Links Relevantes</h3>
             <a className='l' href='#'>Website: www.mariaeduarda.com</a>
            <dd></dd>
             <a className='l' href='#'>LinkedIn: www.linkedin.com/in/duda</a>
            <dd></dd>
             <a className='l' href='#'>GitHub: www.github.com/mariaeduardinha</a>
            
          </article>

         

          <article className='conteudo'>
            <h3>Declaração de Privacidade</h3>
            <p>Esta página coleta cookies para melhorar a experiência do usuário. Leia nossa política de privacidade para mais informações.</p>
            <h3>Data de Atualização:</h3>
          <p>Última atualização: 30 de agosto de 2023</p>
          </article>

        </div>
       </footer>
    )
}
export default Footer