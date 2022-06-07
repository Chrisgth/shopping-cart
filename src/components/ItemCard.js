const ItemCard = ({currentCar}) => {
	return ( 
		<div className="itemCardContainer">
			<button onClick={() => document.querySelector('.itemCardContainer').classList.toggle('active')}>X</button>
			<div className="itemOverlay">
				<p>{currentCar.carName}</p>
			</div>
		</div>
	 );
}
 
export default ItemCard;