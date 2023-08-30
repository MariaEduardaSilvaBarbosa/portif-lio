import './Header.css'
import logo from '../../assets/logome.png'
function Header(){
    return(
        <header>
         <div>
         <img src={logo} alt=""/>
         </div>
         <nav>
            <ul>
                <li>
                    <a href="#">Página inicial</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Noticía</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
         </nav>
        </header>
    )
}
export default Header