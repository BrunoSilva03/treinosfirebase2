import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <Link to="/treinosfirebase2/teste1">
        <h1>Teste 1 Básico: </h1>
        </Link>

        <br /> <br/> <br/>

        <Link to="/treinosfirebase2/galojogadores">
        <h1>Galo Jogadores</h1>
        </Link>
        <br/> <br/> <br/>


        <Link to="/treinosfirebase2/inputcomfoto">
            <h1>Input Com Foto</h1>
        </Link>
        <br/><br/><br/>

        <Link to="/workimages">
            <h1>WorkImages</h1>
        </Link>
        </>
    )
}

export default Home;