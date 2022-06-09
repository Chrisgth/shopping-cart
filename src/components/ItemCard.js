import { useState } from "react";

const ItemCard = ({currentCar}) => {

	const [price, setPrice] = useState(0)

	const changeHandler = () => {
		const onlyNumbers = currentCar.price.replace(/\D/g, '')
		const multiplier = document.getElementById('multiplier')
		let totalPrice = onlyNumbers * multiplier.value
		const commaAddition = (number) => {
			let splitString = number.toString().split('')
			let currentIndex = splitString.length - 3
			let initLength = splitString.length
			for(let i=0; i<(Math.floor(initLength/3)); i++) {
				if (currentIndex === 0) {
					setPrice(splitString.join(''))
					return
				}
				splitString.splice(currentIndex, 0, ',')
				currentIndex = currentIndex - 3
			}
			setPrice(splitString.join(''))
		}
		commaAddition(totalPrice)
	}

	// const descExtender = () => {
	// 	const description = document.querySelector('.itemDesc')
	// 	description.classList.toggle('extended')
	// }
	return ( 
		<div className="itemCardContainer">
			<button onClick={() => document.querySelector('.itemCardContainer').classList.toggle('active')}>X</button>
			<div className="itemOverlay">
				<div className="itemInfo">
					<h3>{currentCar.carName}</h3>
					<div>
						<h3>Comes with:</h3>
						<p>{currentCar.airbags}</p>
						<p>{currentCar.doors}</p>
					</div>
					<div>
						<h3>Available in:</h3>
						<p>{currentCar.engineOne}</p>
						<p>{currentCar.engineTwo}</p>
					</div>
				</div>
				<div className="itemImage">
					<img src={currentCar.imgurl} alt="" />
				</div>
				<div className="itemDesc">
					<p>{currentCar.description}</p>
				</div>
				{/* <button className="descExtender" onClick={() => descExtender()}>^</button> */}
				<div className="cartAddition">
					<p>${price}</p>
					<input onChange={() => changeHandler()} type="number" id="multiplier" />
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	 );
}
 
export default ItemCard;