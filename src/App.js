import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Sections/Header/Header'
import Container from '../src/components/Container/Container'
import Footer from './components/Sections/Footer/Footer'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Stream from './Pages/Stream/Stream'
import Browse from './Pages/Broswe/Browse'

const App=()=> {
return (
<>
<BrowserRouter>
    <Header />
        <Container> 
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Browse' element={<Browse />}/>
                <Route path='/Profile' element={<Profile />}/>
                <Route path='/streem' element={<Stream />}/>
            </Routes>
        </Container>
        <Footer />
    </BrowserRouter>
    </>
)
} 

export default App