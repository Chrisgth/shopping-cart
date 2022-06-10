const Cart = () => {

	const cart = JSON.parse(window.localStorage.getItem('cart'))

	return ( 
		<div className="cart">
			{!cart && <div>empty</div>}
			{cart && <div>
				{cart.map((item) => (
					<div>
						<p>{item.car.carName}</p>
						<p>Quantity: {item.quantity}</p>
						<img src={item.car.imgurl} alt="" />
					</div>
				))}
				</div>}
		</div>
	 );
}
 
export default Cart;