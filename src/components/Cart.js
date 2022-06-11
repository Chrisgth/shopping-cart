const Cart = () => {

	const cart = JSON.parse(window.localStorage.getItem('cart'))

	return ( 
		<div className="cart">
			{!cart && <div>empty</div>}
			<table className="cartTable">
				<tr>
					<th></th>
					<th>Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th></th>
				</tr>
				{cart &&
					cart.map((item) => (
						<tr>
							<td><img src={item.car.imgurl}></img></td>
							<td>{item.car.carName}</td>
							<td>{item.car.price}</td>
							<td><input type="number" value={item.quantity}/></td>
							<td><button>Remove</button></td>
						</tr>
					))}
					
			</table>
				<button onClick={() => window.localStorage.clear()}>Clear cart</button>
		</div>
	 );
}
 
export default Cart;