import {useEfect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from "./scenes/home/Home"

const ScrollToTop = () =>{
  const {pathname} = useLocation();

  useEfect(() =>{
    window.scrollTo(0,0);
  }, [pathname])
  return null;
}
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
