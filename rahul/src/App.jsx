import WithAction from './Components/Navbar/Navbar';
import SmallCentered from './Components/Footer/Footer';
import SplitScreen from './Components/Home/Home';
import Skills from './Components/Pages/Skills';
import { Routes, Route, useLocation } from 'react-router-dom';
import SplitWithImage from './Components/Pages/Projects';
import ConnectMe from './Components/Pages/ContactMe';
import Preloader from './Components/FramerMotion/Preloader';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './Components/FramerMotion/PageWrapper';

function App() {
  const location = useLocation();

  return (
    <>
      <WithAction />
      <Preloader />
      <div>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><SplitScreen /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><SplitWithImage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ConnectMe /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
      <SmallCentered />
    </>
  );
}

export default App;
