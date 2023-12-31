import { db } from './FirebaseConnection';
import { doc, setDoc, getDoc, getDocs, collection, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { RoutesApp } from './routes';

import './App.css';

function Teste1Basico() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');
  const [signo, setSigno] = useState('');
  const [cargo, setCargo] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [idade, setIdade] = useState('');

  const [people, setPeople] = useState([]);
  const [pessoaEncontrada, setPessoaEncontrada] = useState(false);

  // useEffect( () => {
  //   async function loadPosts() {

  //     const unsub = onSnapshot((db, "pessoas"), (snapshot) => {
  //       let listaPessoas = [];


  //       // snapshot.forEach((pessoa) => {
  //       //   listaPessoas.push({
  //       //     id: pessoa.id,
  //       //     nome: pessoa.data().nome,
  //       //     signo: pessoa.data().signo,
  //       //     cargo: pessoa.data().cargo,
  //       //     nacionalidade: pessoa.data().nacionalidade,
  //       //     idade: pessoa.data().idade,
  //       //   })
  //       // })
  //       alert("ABRIU");
        
  //       setPeople(listaPessoas)
  //     })
  //   }


  //   loadPosts();
  // }, [])

  //--------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    async function loadPosts() {
     const unsub = onSnapshot(collection(db, "pessoas"), (snapshot) => {
      let listaPessoas = [];

      snapshot.forEach((pessoa) => {
        listaPessoas.push({
          id: pessoa.id,
          nome: pessoa.data().nome,
          signo: pessoa.data().signo,
          cargo: pessoa.data().cargo,
          nacionalidade: pessoa.data().nacionalidade,
          idade: pessoa.data().idade,
        })
      })

      setPeople(listaPessoas);
     })
    }

    loadPosts();
  }, [])

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


  async function handleRead() {
    const peopleRef = collection(db, "pessoas");

   await getDocs(peopleRef)
   .then((snapshot) => {
    let lista = [];

    snapshot.forEach((item) => {
     lista.push({
      id: item.id,
      nome: item.data().nome,
      signo: item.data().signo,
      cargo: item.data().cargo,
      nacionalidade: item.data().nacionalidade,
      idade: item.data().idade,
     })

     console.log("DEU CERTO, MOSTRANDO PESSOAS COM SUCESSO!!!");
    })
    
    setPeople(lista);
   })
  }

  async function pesquisaPessoa() {
    const pessoaProcurada = doc(db, "pessoas", pessoas)

    await getDoc(pessoaProcurada)
    .then((snapshot) => {
      setPessoas(snapshot.data().pessoas)
      setSigno(snapshot.data().signo);
      setCargo(snapshot.data().cargo);
      setNacionalidade(snapshot.data().nacionalidade);
      setIdade(snapshot.data().idade);
      console.log("PESSOA ENCONTRADA")
      setPessoaEncontrada(true);
    })
    .catch((error) => {
      console.log("PESSOA NÃO ENCONTRADA ");
      console.log(error);
      setPessoaEncontrada(false);
    })
  }

  async function updatePessoa() {
    const pessoaSelecionada = doc(db, "pessoas", pessoas)

    await updateDoc(pessoaSelecionada, {
      nome: pessoas,
      signo: signo,
      cargo: cargo,
      nacionalidade: nacionalidade,
      idade: idade,
    })
    .then(() => {
      console.log("DADOS ATUALIZADOS COM SUCESSO!!!");
      setPessoas('');
      setSigno('');
      setCargo('');
      setNacionalidade('');
      setIdade('');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  async function deleteItem(id) {
    const deleteRef = doc(db, "pessoas", id)

    
    await deleteDoc(deleteRef)
    .then(() => {
      console.log("Pessoa removida do banco de dados com Sucesso!!!");
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


     <section className="areaButton">
       <button onClick={handleAdd}>Cadastrar Pessoa</button>
       <button onClick={handleRead}>Mostrar Pessoas</button>
       <button onClick={pesquisaPessoa}>Pesquisar Pessoa</button>
       <button onClick={updatePessoa}>Editar Pessoa</button><br/><br/>
     </section><br/>

    <ul>
    {people.map((pessoa) => {
      return(
        <li key={pessoa.id}>
          <span><strong>Nome: {pessoa.nome}</strong></span><br/>
          <span>Signo: {pessoa.signo}</span><br/>
          <span>Cargo: {pessoa.cargo}</span><br/>
          <span>Nacionalidade: {pessoa.nacionalidade}</span><br/>
          <span>Idade: {pessoa.idade}</span><br/>
          <button onClick={() => deleteItem(pessoa.id)}>Excluir {pessoa.nome} do banco de dados</button><br/><br/><br/>
        </li>
      )
    })}
    </ul>

    

    </div>
  );
}

export default Teste1Basico;
