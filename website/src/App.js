import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SıgnUp from './components/SıgnUp';
import Hosgeldınız from './components/Hosgeldınız';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route exact path="/" Component={SıgnUp}/>
        <Route exact path="/hosgeldiniz" Component={Hosgeldınız}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
