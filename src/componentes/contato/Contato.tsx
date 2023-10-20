import './Contato.css'
function Contato(){
    return(

    
    <div className='tudo' >
       <form className='form' >
       <label className='t'>ENTRE EM CONTATO COMIGO!</label>
          <label>Nome Completo</label>
          <input className='caixa' type='text' name='nome' required></input>

          <label>Email</label>
          <input className='caixa' type='email' name='email' required></input>

          <label>Telefone</label>
          <input className='caixa' type='tel' name='telefone' required></input>

          <label>CPF</label>
          <input className='caixa' type='text' name='cpf'required></input>

          <div className="b">
<button type="submit">Enviar</button>
</div>
       </form>
     </div>
    )
}
export default Contato