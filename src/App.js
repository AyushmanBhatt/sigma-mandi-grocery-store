import React from 'react';
/*import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Loginpage from './pages/Loginpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Cart from './pages/shoppingcart';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import Deliveryorder from './pages/Deliveryorder';
import ProductList from './pages/DatabaseView';
import ProductForm from './components/ProductForm';
import CustomerDashboard from "./pages/CustomerDashboard"; // Add this import
import VendorDashboard from "./pages/VendorDashboard"; // Add this import
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dbviewpage" element={<ProductList />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/contactpage" element={<Contactpage />} />

        <Route path="/customer-dashboard" element={CustomerDashboard} />
        <Route path="/vendor-dashboard" element={VendorDashboard} />
        
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/deliveryorder" element={<Deliveryorder />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;*/
import './App.css';
import Signin from './pages/Signin';
import Loginpage from './pages/Loginpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Cart from './pages/shoppingcart';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import Deliveryorder from './pages/Deliveryorder';
import ProductList from './pages/DatabaseView';
import ProductForm from './components/ProductForm';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import Vegetable from './components/vege';


function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user ? <Homepage /> : <Navigate to="/login" />}></Route>
        <Route path='/login' element={!user ? <Loginpage /> : <Navigate to="/homepage" />}></Route>
        <Route path='/signin' element={!user ? <Signin /> : <Navigate to="/login" />}></Route>
        <Route path='/homepage' element={user ? <Homepage /> : <Navigate to="/login" />}></Route>
        <Route path='/contactpage' element={user ? <Contactpage /> : <Navigate to="/login" />}></Route>
        <Route path='/dbviewpage' element={user ? <ProductList /> : <Navigate to="/login" />}></Route>
        <Route path='/shoppingcart' element={user ? <Cart /> : <Navigate to="/login" />}></Route>
        <Route path='/product/:productId' element={user ? <ProductPage /> : <Navigate to="/login" />}></Route>
        <Route path='/adminpage' element={user ? <AdminPage /> : <Navigate to="/login" />}></Route>
        <Route path='/deliveryorder' element={user ? <Deliveryorder /> : <Navigate to="/login" />}></Route>
        <Route path='/productform' element={user ? <ProductForm /> : <Navigate to="/login" />}></Route>
        <Route path='/aboutpage' element={user ? <Aboutpage /> : <Navigate to="/login" />}></Route>
        <Route path="/vegetable" element={user ? <Vegetable /> : <Navigate to="/login" />}></Route>
        <Route path="/paymentsuccess" element={user ? <PaymentSuccess /> : <Navigate to="/login" />}></Route>
        <Route path="/paymentfailed" element={user ? <PaymentFailed /> : <Navigate to="/login" />}></Route>
      </Routes>
    </div >
  );
}

export default App;