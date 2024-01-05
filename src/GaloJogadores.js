import styles from './GaloJogadores.module.css';
import { db } from './FirebaseConnection';
import { doc, setDoc, getDoc, getDocs, collection, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';

function GaloJogadores() {
    const [jogadoresLista, setJogadoresLista] = useState([]);
    const [idade, setIdade] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [posicao, setPosicao] = useState('');

    async function handleAdd()  {
        console.log('entrou no handleAdd')
        await setDoc(doc(db, "jogadores", jogadoresLista), {
            idade: idade,
            nacionalidade: nacionalidade,
            posicao: posicao,
        })
        .then(() => {
            console.log("DADOS REGISTRADOS NO BANCO COM SUCESSO!")
            setJogadoresLista('');
            setIdade('');
            setNacionalidade('');
            setPosicao('');
        })
    }

    const naoAtualizarPage = (e) => {
        console.log('entrou não não atualiza page')
        e.preventDefault();
        handleAdd();
    }

    return(
        <>
        <h1>Galo Jogadores</h1>
        <br/><br/><br/>

        <form>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" name="nome" autoComplete="off"
            value={jogadoresLista}
            onChange={(e) => setJogadoresLista(e.target.value)}/>
            <br/><br/><br/>


            <label htmlFor="idade">Idade: </label>
            <input type="number" id="idade" nome="idade" autoComplete="off"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}/>
            <br/><br/><br/>


            <label htmlFor="nacionalidade">Nacionalidade: </label>
            <select id="nacionalidade" name="nacionalidade"
            value={nacionalidade}
            onChange={(e) => setNacionalidade(e.target.value)}>
            <option>Selecione o país</option>
                <option>Brasil</option>
                <option>Argentina</option>
                <option>Uruguai</option>
                <option>Venezuela</option>
                <option>Chile</option>
                <option>Perú</option>
                <option>Guianas</option>
                <option>Europa</option>
                <option>México</option>
                <option>África</option>
                <option>Eua</option>
                <option>China</option>
                <option>Japão</option>
                <option>Outro</option>
            </select>
            <br/><br/><br/>


            <label htmlFor="posicao">Posição: </label>
            <select id="posicao" name="posicao"
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}>
            <option>Selecione a posição do jogador</option>
                <option>Goleiro</option>
                <option>Zagueiro</option>
                <option>Lateral</option>
                <option>Volante</option>
                <option>Meia</option>
                <option>Atacante</option>
                <option>Centro-Avante</option>
            </select>
            <br/><br/><br/>


            <div className="areaButton">
            <button type="reset">Cancelar</button>
            <button onClick={naoAtualizarPage}>Cadastrar Jogador</button>
            </div>
        </form>
        </>
    )
}

export default GaloJogadores;