import logo from '../assets/logo.png';
import '../styles/App.css';
import Banner from './Banner.js';
import Footer from './Footer';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';
import '../styles/Layout.css'

function App() {
	return (
    	<div className="App">
			<Banner>
				<img src={logo} alt='The Jungle Home' className='logo'/>
				<h1 className="title">The home Jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
      		<Footer/>
    	</div>
  	);
}

export default App;
