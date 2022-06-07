const ItemCard = ({currentCar}) => {
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
					<p>{currentCar.price}</p>
					<input type="number"/>
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	 );
}
 
export default ItemCard;