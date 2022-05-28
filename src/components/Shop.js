import useFetch from "../hooks/useFetch";

const Shop = () => {
	const {data: cars, isPending, error } = useFetch('https://chrisgth.github.io/cartapi/data/cars.json');
	console.log(cars)
	return ( 
		<div className="shop">
			<p></p>
		</div>
	 );
}
 
export default Shop;