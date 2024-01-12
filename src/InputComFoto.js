import styles from './InputComFoto.module.css';
import camera  from './images/camera30x30.png';

import { useEffect } from 'react';

function InputComFoto() {
    'use strict'

    //Código dentro do useEffect para não dar erro.
    //Se o input type estiver abrindo mais de uma vez exclua o StrictMode no index.js
    //Ele simula o comportamento de montagem e desmontagem do componente e as vezes ele duplica algumas paradas e ações.
    useEffect(() => {

        let photo = document.getElementById('imgPhoto');
        let file = document.getElementById('flImage');
        let circulo = document.getElementById('imageContainer');
        
        photo.addEventListener('click', () => {
            console.log('entrou 1');
            file.click();
            return;
        });
        
    }, [])
    // circulo.addEventListener('click', () => {
    //     file.click();
    // });


    return(
        <>

        <div className={styles.maxWidth}>
            <div className={styles.imageContainer}>
                <img src={camera} alt="Selecione uma imagem" id="imgPhoto"/>
            </div>
        </div>


        <input type="file" id="flImage" name="flImage" accept="images/*" />
        </>
    )
}

export default InputComFoto;