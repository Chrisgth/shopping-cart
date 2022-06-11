import { useState, useEffect } from "react";
import { responsivePrice } from "../functions/responsivePrice";
const Cart = () => {

	const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart')))

	const deleteItem = (index) => {
		const newCart = [...cart]
		newCart.splice(index, 1)
		setCart(newCart)
	}

	const changeQuantity = (value, index) => {
		const newCart = [...cart]
		newCart[index].quantity = value
		setCart(newCart)
	}

	const clearCart = () => {
		if (window.confirm('Are you sure you want to clear your cart?')) {
			window.localStorage.clear()
			setCart([])
		} else {
			return
		}
	}

	let totalPrice = 0

	const commaAddition = (number) => {
		let splitString = number.toString().split('')
		let currentIndex = splitString.length - 3
		let initLength = splitString.length
		for(let i=0; i<(Math.floor(initLength/3)); i++) {
			if (currentIndex === 0) {
				return splitString.join('')
			}
			splitString.splice(currentIndex, 0, ',')
			currentIndex = currentIndex - 3
		}
		return splitString.join('')
	}

	const subTotal = () => {
		for (let i = 0; i<cart.length; i++) {
			let singleItem = responsivePrice(cart[i].car, cart[i].quantity)
			let onlyNumbers = singleItem.replace(/\D/g, '')
			totalPrice += Number(onlyNumbers)
		}
		totalPrice = commaAddition(totalPrice)
	}

	subTotal()

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return ( 
		<div className="cart">
			{!cart && <div>empty</div>}
			<table className="cartTable">
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th></th>
					</tr>
				</thead>
				{cart && <tbody>{
					cart.map((item, index) => (
						<tr key={index}>
							<td><img src={item.car.imgurl} alt="car"></img></td>
							<td>{item.car.carName}</td>
							<td>${responsivePrice(item.car, item.quantity)}</td>
							<td><input 
							id={index}
							type="number" 
							value={item.quantity} 
							onChange={(e) => changeQuantity(e.target.value, index)}
							max={"100"}
							min={"1"}
							/></td>
							<td><button onClick={() => deleteItem(index)}>Remove</button></td>
						</tr>
					))}</tbody>}
			</table>
				<div>
					<p>Subtotal: ${totalPrice}</p>
				</div>
				<button onClick={() => clearCart()}>Clear cart</button>
		</div>
	 );
}
 
export default Cart;