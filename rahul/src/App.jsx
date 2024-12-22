import WithAction from './Components/Navbar/Navbar'
import SmallCentered from './Components/Footer/Footer'
import SplitScreen from './Components/Home/Home'
import Skills from './Components/Pages/Skills'
import { Routes, Route } from 'react-router-dom'
import SplitWithImage from './Components/Pages/Projects'
import ConnectMe from './Components/Pages/ContactMe'


function App() {
  return (
    <>
    <WithAction/>

    <Routes>
        <Route path="/" element={<SplitScreen/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<SplitWithImage/>} />
        <Route path="/contact" element={<ConnectMe/>} />
    </Routes>

    <SmallCentered/> 
    </>
  )
}
export default App
