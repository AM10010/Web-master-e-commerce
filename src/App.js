import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Product/Product";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router";
import ProductPage from "./components/Details/[id]";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Cart/CartContex.jsx";
import SignupForm from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Found from "./components/Found/Found.jsx";
import Home from "./components/Home/Home";
import AuthProvider from "./components/Auth/AuthContext";
import CheckOut from "./components/CheckOut/CheckOut.jsx";
import Bestselling from "./components/Home/BestSelling/BestSelling.jsx";
import "./index.css";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route
              path="/product"
              element={
                <>
                  <ProductList />
                </>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/Web-master-e-commerce/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/bestselling" element={<Bestselling />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Found />} />

          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
