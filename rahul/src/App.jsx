import WithAction from './Components/Navbar'
import SmallCentered from './Components/Footer'
import SplitScreen from './Components/Home'
import Skills from './Components/Skills'

import GitHubContributionChart from './Components/GithubContributions'
import { Routes, Route } from 'react-router-dom'
import SplitWithImage from './Components/Projects'


function App() {
  return (
    <>
    <WithAction/>

    <Routes>
        <Route path="/" element={<SplitScreen/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<SplitWithImage/>} />
        <Route path="/contact" element={<GitHubContributionChart/>} />
    </Routes>

    <SmallCentered/> 
    </>
  )
}
export default App
