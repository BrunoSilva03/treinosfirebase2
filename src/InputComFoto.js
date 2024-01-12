import styles from './InputComFoto.module.css';
import camera  from './images/camera30x30.png'

function InputComFoto() {
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