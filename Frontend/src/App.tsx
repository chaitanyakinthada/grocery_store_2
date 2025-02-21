// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { SignUp } from "./pages/SignUp"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import CategoryDetail from "./components/Category/CategoryDetail"
// import styles from '/CategoryDetail.css';
import { useEffect, useState } from "react";
import { CartItem } from "./components/CartItem";
import Checkout from "./pages/Checkout"
import { PaymentPage } from "./components/PaymentComponent"
import SuccessPage from "./components/SuccessPage"

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/test-db")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <ShoppingCartProvider >
      
        <Navbar />
        <Container>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<CartItem id={1} quantity={2} />} /> {/* Update with dynamic cart data */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
          </Routes>
          
        </Container>
        {/* <div>
      <h1>Azure SQL Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div> */}
    </ShoppingCartProvider>
  )
}

export default App
