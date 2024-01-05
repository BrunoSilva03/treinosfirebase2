import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home'
import Teste1Basico from './Teste1Basico';
import GaloJogadores from './GaloJogadores';


function RoutesApp() {
    return(
        <>
        <Routes>
            <Route exact path="/treinosfirebase2" element={<Home />}/>

            <Route path="/treinosfirebase2/teste1" element={<Teste1Basico />} />

            <Route path="/treinosfirebase2/galojogadores" element={<GaloJogadores />} />
        </Routes>
        </>
    )
}

export default RoutesApp;