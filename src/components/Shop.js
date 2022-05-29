import { useEffect, useState } from "react";

const Shop = () => {

	const [carsArr, setCarsArr] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage, setPostsPerPage] = useState(4)

	useEffect(() => {
		const fetchCars = async () => {
			setLoading(true)
			await fetch('https://chrisgth.github.io/cartapi/data/cars.json')
				.then((response) => {
					if(!response.ok) {
						throw Error('Could not fetch data')
					}
					return response.json()
				})
				.then((response) => {
					setCarsArr(response.cars)
					setLoading(false)
					setError(false)
				})
				.catch((err) => {
					setError(err.message)
					setLoading(false)
				})
		}
		fetchCars()
	}, [])


	return ( 
		<div className="shop">
			{loading && <div>Loading</div>}
			{error && <div>{error}</div>}
			<div className="shopItems">
				{carsArr && carsArr.map(car => (
					<div className="shopItem" key={car.id}>
						{car.engineOne}
					</div>
				))}
			</div>
		</div>
	 );
}
 
export default Shop;