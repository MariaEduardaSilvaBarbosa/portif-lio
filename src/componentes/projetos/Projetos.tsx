import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Projetos.css'
type ProjetosType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Projetos(){
    //Hook
    const [texto,setTexto] = useState("")

    const projetos:ProjetosType[] = [
        {
            id:1,
            titulo:"Trabalho da Barbie",
            sinopse:"Com o tema barbie criei os componentes header e footer",
            imagem:"/barbiebt.png"
        },
        {
            id:2,
            titulo:"Portal Pet",
            sinopse:"Trabalho onde criei uma tela para mobile e desktoop com meu tema de tcc",
            imagem:"/pet.png"
        }
        ,
        {
            id:3,
            titulo:"Site Pandora",
            sinopse:"Trabalho em que recriei a página inicial da pandora",
            imagem:"/pandora.png"
        }
        ,
        {
            id:4,
            titulo:"FECINAVI",
            sinopse:"Apresentação de trabalho na Feira de Ciências e Tecnologia do IFMS campus Naviraí",
            imagem:"/fecinavi.jpg"
        }
        ,
        {
            id:5,
            titulo:"Visita Técnica a Itaipu Binacional",
            sinopse:"Visita completa guiada na Usina, incluindo o roteiro panorâmico, com acesso à área industrial, passando pela sala de comando central, interior da barragem, galeria dos geradores e eixo da unidade geradora.",
            imagem:"/itaipu.jpeg"
        }
        ,
        {
            id:6,
            titulo:"Visita Técnica as Cataratas do Iguaçu",
            sinopse:"Em resumo, essa visita me proporcionou uma oportunidade única de aprendizado, pesquisa e apreciação da natureza em um dos lugares mais espetaculares do planeta. Ela combina educação, aventura e conservação, deixando uma impressão duradoura sobre todos que têm o privilégio de conhecer.",
            imagem:"/eu.jpeg"
        }
        

    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p className="t" >Buscar Projetos:</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'> {texto}</p>
                </div>
            </div>
            <main className="content-main">
                
            {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetosType)=> 
            <Projeto key={projeto.id}
            titulo={projeto.titulo}
            sinopse={projeto.sinopse}
            imagem={projeto.imagem}/>)}

            </main>
        </>
    )
}