import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import DataNotFound from './component/DataNotFound/DataNotFound';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Blog from './component/Blog/Blog';
import Inventoris from './component/Inventoris/Inventoris';
import RequireAuth from './Hooks/RequireAuth';
import LogIn from './component/LogIn/LogIn';
import MyItems from './component/MyItems/MyItems';
import ManageItems from './component/ManageItems/ManageItems';
import ManageInventories from './component/ManageInventories/ManageInventories';
import Register from './component/Register/Register';
import SingleProduct from './component/SingleProduct/SingleProduct';
import AddItem from './component/AddItem/AddItem';
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventoris' element={
          <RequireAuth>
            <Inventoris></Inventoris>
          </RequireAuth>}>
        </Route>
        <Route path='/inventoris/:id' element={
          <RequireAuth><SingleProduct></SingleProduct>
          </RequireAuth>}>
        </Route>
        <Route path='/manageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/manageitems' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<DataNotFound></DataNotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
