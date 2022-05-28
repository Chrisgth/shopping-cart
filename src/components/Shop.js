import useFetch from "../hooks/useFetch";

const Shop = () => {
	
	const {data: cars, isPending, error } = useFetch('https://chrisgth.github.io/cartapi/data/cars.json');

	return ( 
		<div className="shop">
			{error && <div>{error}</div>}
			{isPending && <div>Loading</div>}
			<div className="shopItems">
				{cars && cars.cars.map(car => (
					<div className="shopItem" key={car.id}>
						
					</div>
				))}
			</div>
		</div>
	 );
}
 
export default Shop;