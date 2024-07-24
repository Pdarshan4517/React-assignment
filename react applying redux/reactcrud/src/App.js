import './App.css';
import{Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Adduser from './pages/Adduser';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/adduser' element={<Adduser />} />
       <Route path='/edit/:id' element={<Edit />} />
       </Routes>
    </div>
  );
}

export default App;
