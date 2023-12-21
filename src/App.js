import { db } from './FirebaseConnection';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';

import './App.css';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [signo, setSigno] = useState('');
  const [cargo, setCargo] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [idade, setIdade] = useState('');

  async function handleAdd() {
    //aqui está também criando o document "pessoas"
    await setDoc(doc(db, "pessoas", pessoas), {
      nome: pessoas,
      signo: signo,
      cargo: cargo,
      nacionalidade: nacionalidade,
      idade: idade,
    })
    .then(() => {
      console.log("TUDO CERTO ENTÃO, PESSOA CADASTRADA COM SUCESSO NO SISTEMA!!!");
      setPessoas('');
      setNome('');
      setSigno('');
      setCargo('');
      setNacionalidade('');
      setIdade('');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <h1>Pessoas: </h1>
      <br/><br/>

     <label>Nome:</label>
     <input type="text"
     placeholder="Digite o nome da pessoa"
     value={pessoas}
     onChange={ (e) => setPessoas(e.target.value)}></input>
     <br/><br/>


     <label>Signo:</label>
     <input type="text"
     placeholder="Digite o signo da pessoa"
     value={signo}
     onChange={ (e) => setSigno(e.target.value)}></input>
     <br/><br/>


     <label>Cargo:</label>
     <input type="text"
     placeholder="Digite o cargo da pessoa"
     value={cargo}
     onChange={ (e) => setCargo(e.target.value)}></input>
     <br/><br/>


     <label>Nacionalidade:</label>
     <input type="text"
     placeholder="Digite a nacionalidade"
     value={nacionalidade}
     onChange={ (e) => setNacionalidade(e.target.value)}></input>
     <br/><br/>

     <label>Idade: </label>
     <input type="text"
     placeholder="Digite a idade da pessoa"
     value={idade}
     onChange={ (e) => setIdade(e.target.value)}></input>
     <br/><br/>


     <button onClick={handleAdd}>Cadastrar Pessoa</button>



    </div>
  );
}

export default App;
