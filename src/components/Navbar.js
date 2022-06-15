import { Link } from "react-router-dom";
import shoppingCart from '../images/shopping-cart.png'

const Navbar = () => {
	return ( 
		<div className="navbar">
			<h1>AutoTraderCart</h1>
			<div className="links">
				<Link to='/shopping-cart'>Home</Link>
				<Link to='/shop'>Shop</Link>
			</div>
			<Link to='/cart'><img
				id="cartico"
				src={shoppingCart}
				alt="shoppingcart"
				/>
				</Link>
		</div>
	 );
}
 
export default Navbar;