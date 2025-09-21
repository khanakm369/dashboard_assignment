import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Finance from '../components/Finance';
import Orders from '../components/Orders';
import Products from '../components/Products';
import Profiles from '../components/Profiles';
import './Sidebar.css';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaBoxOpen, FaUserCircle, FaClipboardList } from 'react-icons/fa';


const Sidebar = () => {
  return (
     <div className="layout">
      <motion.aside
        className="sidebar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <ul>
          <li><Link to="/finance"><FaMoneyBillWave /> Finance</Link></li>
          <li><Link to="/orders"><FaClipboardList /> Orders</Link></li>
          <li><Link to="/products"><FaBoxOpen /> Products</Link></li>
          <li><Link to="/profiles"><FaUserCircle /> Profiles</Link></li>

        </ul>
      </motion.aside>


     <motion.main
        className="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Routes>
          <Route path="/finance" element={<Finance />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </motion.main>
    </div>
  );
};


export default Sidebar