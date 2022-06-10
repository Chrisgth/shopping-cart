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

	const cartAddition = () => {

		let cart = JSON.parse(window.localStorage.getItem('cart'))
		console.log(cart)

		if (cart === null) {
			cart = []
			console.log(cart)
		}

		let cartItem = {
			car: '',
			quantity: ''
		}

		const multiplier = document.getElementById('multiplier').value
		if ( multiplier === "0" || multiplier === "" || multiplier === NaN || multiplier > 100) return

		cartItem.car = currentCar
		cartItem.quantity = document.getElementById('multiplier').value

		for (let i=0; i<=cart.length; i++) {
			if (cart.length===0) {
				cart.push(cartItem)
				cart = JSON.stringify(cart)
				window.localStorage.setItem('cart', cart)
				document.getElementById('multiplier').value = 0
				document.querySelector('.itemCardContainer').classList.toggle('active')
				return

			} else if (cart[i].car.carName === cartItem.car.carName) {
				cart[i].quantity = (Number(cart[i].quantity) + Number(cartItem.quantity)).toString()
				console.log(cart[i].quantity)
				cart = JSON.stringify(cart)
				window.localStorage.setItem('cart', cart)
				document.getElementById('multiplier').value = 0
				document.querySelector('.itemCardContainer').classList.toggle('active')
				return

			} else if (i===cart.length-1) {
				cart.push(cartItem)
				cart = JSON.stringify(cart)
				window.localStorage.setItem('cart', cart)
				document.getElementById('multiplier').value = 0
				document.querySelector('.itemCardContainer').classList.toggle('active')
				return
			}
		}
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
					{price == 0 && <p>{currentCar.price}</p>}
					{price !=0 && <p>${price}</p>}
					<input onChange={() => changeHandler()} type="number" id="multiplier" min={"0"} max={"100"}/>
					<button id="addToCart" onClick={() => cartAddition()}>Add to Cart</button>
				</div>
			</div>
		</div>
	 );
}
 
export default ItemCard;