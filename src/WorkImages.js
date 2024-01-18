import styles from './WorkImages.module.css';

function WorkImages() {
    return(
        <div className={styles.main}>
        <form>
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


        </form>
        </div>
    )
}

export default WorkImages;