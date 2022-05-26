import { Link } from 'react-router-dom';
import mazda from '../images/mazdacx3.jpg'

const Home = () => {
	return ( 
		<div className="home">
			<div className="intro">
				<h2>Find your next car!</h2>
				<img src={mazda} alt="mazdacx3" />
				<Link to="/shop">Shop Now</Link>
			</div>
		</div>
	 );
}
 
export default Home;