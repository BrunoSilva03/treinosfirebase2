import { db, storage } from './FirebaseConnection';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import camera from './images/camera30x30.png';
import cam from './images/cam.png';
import styles from './WorkImages.module.css';
import { useState, useEffect } from 'react';

function WorkImages() {

    const [imgURL, setImgURL] = useState([]);
    const [jogadores2, setJogadores2] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');

    useEffect(() => {
        var file = document.getElementById('file');
        var photo = document.getElementById('imgPhoto');

        photo.addEventListener('click', () => {
            file.click();
        })

        file.addEventListener('change', (event) => {
            let reader = new FileReader();

            reader.onload = () => {
                photo.src = reader.result;
            }

             //file.files[0] retorna todos os arquivos na posição 0
            reader.readAsDataURL(file.files[0]);
        })

    }, [])


    const submitForm = (event) => {
        handleUpload(event);
        handleAdd();
    }

    const handleUpload = (event) => {
        event.preventDefault();

        //O usuário pode mandar várias imagens, mas essa linha
        //basicamente faz o sistema escolher só a primeira imagem.
        const file = event.target[0]?.files[0];

        //Se não tiver nenhum arquivo, não retorna nada.
        if(!file) return;

        //"storage" é a nossa conexão com o nosso storage, colocamos o nome de storage no firebaseConnection
        //o segundo parâmetro é a pasta dentro do storage que vai armazenar as imagens
        const storageRef = ref(storage, `images/${file.name}`);

        //Esse uploadTask é para poder salvar a aplicação
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on(
            "state_changed",
            () => {
                //Aqui é para gerar a URL da nossa imagem para poder mostrar ela em tela e também para subir ela 
                //pro firebase.
                //ref é a nossa referÇencia da URL
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgURL(url);
                })
            }
        )
    }




    async function handleAdd() {
        await setDoc(doc(db, "jogadores2", jogadores2), {
            nome: nome,
        })
    }


    return(
        <div className={styles.main}>
        <form onSubmit={submitForm}>

            <label htmlFor="foto">Foto do Jogador: </label>
            <div className={styles.imagemDeFundo}>
                <img src={cam} className={styles.imgPhoto} id="imgPhoto"/>
            </div>

            <input type="file" id="file"/>
            <br/><br/>

            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" name="nome" autoComplete="off" placeholder="digite o nome do jogador"/>
            <br/><br/>

            <label htmlFor="idade">Idade: </label>
            <input type="number" id="idade" name="idade" autoComplete="off" placeholder="digite a idade do jogador"/>
            <br/><br/>

            <label htmlFor="nacionalidade">Nacionalidade: </label>
            <select>
                <option>Selecione uma opção: </option>
                <option>Brasil</option>
                <option>Argentina</option>
                <option>Venezuela</option>
                <option>Uruguai</option>
                <option>Outro</option>
            </select>
            <br/> <br/> <br/>

            <section className={styles.areaButton}>
                <button type="submit" className={styles.btnCadastrar}>Cadastrar</button>
                <button type="reset" className={styles.btnCancelar}>Cancelar</button>
            </section>

        </form>
        </div>
    )
}

export default WorkImages;