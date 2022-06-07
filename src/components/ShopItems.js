import { useState } from "react";
import ItemCard from "./ItemCard";

const ShopItems = ({cars, loading, error}) => {

	const [currentCar, setCurrentCar] = useState([])

	const clickHandler = (car) => {
		setCurrentCar(car)
		const itemCardContainer = document.querySelector('.itemCardContainer')
		itemCardContainer.classList.toggle('active')
	}

	return ( 
		<div className="shopItems">
			{error && <div>{error}</div>}
			{loading && <div>Loading...</div>}
			{cars && cars.map(car => (
				<div
				onClick={() => clickHandler(car)} 
				className="shopItem" 
				key={car.id}>
					{car.carName}
					<img src={car.imgurl}></img>
					{car.price}
				</div>
			))}
			<ItemCard currentCar={currentCar}/>
		</div>
	 );
}
 
export default ShopItems;