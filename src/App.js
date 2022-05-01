import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import DataNotFound from './component/DataNotFound/DataNotFound';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='*' element={<DataNotFound></DataNotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
