const ShopItems = ({cars, loading, error}) => {
	return ( 
		<div className="shopItems">
			{error && <div>{error}</div>}
			{loading && <div>Loading...</div>}
			{cars && cars.map(car => (
				<div className="shopItem" key={car.id}>
					{car.carName}
				</div>
			))}
		</div>
	 );
}
 
export default ShopItems;