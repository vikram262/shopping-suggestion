import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Product from '../components/product'
import { BrowserRouter as Router, Routes, Route, useSubmit } from 'react-router-dom';
import Bags from '../components/bags'
import Display from '../components/display'
import { Items } from '../context/context'
import { Bagitems } from '../context/bagcontext'
import Finalbag from '../components/finalebag'
import Home from '../components/home'
import Singleproduct from '../components/singleproduct'
import { Singleitems } from '../context/singleitemcontex'
import Jewelery from '../components/jeweleryfetch'
import Womenfetch from '../components/womenfetch'
import Menfetch from '../components/menwearfetch'
import Offer from '../components/offer'
import Wishlist from '../components/wishlist'
import { Wishlistitems } from '../context/wishlistcontext'
import { Reloder } from '../context/reloder'
import Profile from '../components/signup';
import Login from '../components/login';
import Logout from '../components/logout'
import Transverse from '../components/transversepage'
import Giftshome from '../components/gifts/gifts.home'
import Contact from '../components/contact'
import Supercoin from '../components/supercoins'
import Superexplorer from '../components/supercoinexplore'
import ShippingDetail from '../components/shipping/shippingdetails'
import Confirmorder from '../components/shipping/confirmorder'
import FailPage from '../components/shipping/failpayment'
import SuccessPage from '../components/shipping/successpayment'
function App() {
  const [contextitems, setcontextitems] = useState([]);
  const [desc, setdesc] = useState([]);
  const [shop, setshop] = useState([]);
  const [men, setmen] = useState([]);
  const [women, setwomen] = useState([]);
  const [jewelery, setjewelery] = useState([]);
  const [electronic, setelectronics] = useState([]);

  const getLocalItems = () => {
    const items = localStorage.getItem('baglist');
    if (items) {
      return JSON.parse(items);
    }
    else {
      return [];
    }
  };

  const getLocalItems1 = () => {
    const items = localStorage.getItem('wishlist');
    if (items) {
      return JSON.parse(items);
    }
    else {
      return [];
    }
  };

  const getLocalItems2 = () => {
    const items = localStorage.getItem('userlist');
    if (items) {
      return JSON.parse(items);
    }
    else {
      return [];
    }
  };


  const [bagitems, setbagitems] = useState(getLocalItems());
  const [updatedwishlist, setwishlist] = useState(getLocalItems1());
  const [users, setUsers] = useState(getLocalItems2);


  return (
    <>
      <Items.Provider value={{ arr: contextitems, setcontextitems }}>
        <Bagitems.Provider value={{ bagarr: bagitems, setbagitems }}>
          <Singleitems.Provider value={{ desc, setdesc }}>
            <Wishlistitems.Provider value={{ wishlistarr: updatedwishlist, setwishlist }}>
              <Reloder.Provider value={{ shop, setshop, men, setmen, women, setwomen, jewelery, setjewelery, electronic, setelectronics, users, setUsers }}>
                <Router>
                  <Header />
                  <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Display />} />
                    <Route path="/bags" element={<Bags />} />
                    <Route path="/aboutproduct" element={<Singleproduct />} />
                    <Route path="/jewelery" element={<Display />} />
                    <Route path="/menwear" element={<Display />} />
                    <Route path="/womenwear" element={<Display />} />
                    <Route path="/electronic" element={<Display />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Transverse />} />
                    <Route path="/gifts" element={<Giftshome />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/supercoin" element={<Supercoin />} />
                    <Route path="/superexplorer" element={<Superexplorer />} />
                    <Route path="/shippingdetails" element={<ShippingDetail />} />
                    <Route path="/confirmorder" element={<Confirmorder />} />
                    <Route path="/failpage" element={<FailPage />} />
                    <Route path="/successpage" element={<SuccessPage />} />
                  </Routes>

                </Router>
                <Footer />
              </Reloder.Provider >
            </Wishlistitems.Provider >
          </Singleitems.Provider >
        </Bagitems.Provider >
      </Items.Provider>
    </>
  )
}

export default App
