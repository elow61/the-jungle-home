import logo from '../assets/logo.png';
import '../styles/App.css';
import Banner from './Banner.js';
import Footer from './Footer';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';
import '../styles/Layout.css'

import { useState, useEffect } from 'react';

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	return (
    	<div className="App">
			<Banner>
				<img src={logo} alt='The Jungle Home' className='logo'/>
				<h1 className="title">The home Jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
      		<Footer/>
    	</div>
  	);
}

export default App;
