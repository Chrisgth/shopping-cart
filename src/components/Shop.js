import { useEffect, useState } from "react";
import ShopItems from "./ShopItems";
import ShopPag from "./ShopPag";

const Shop = () => {

	const [carsArr, setCarsArr] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(4)

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

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = carsArr.slice(indexOfFirstPost, indexOfLastPost)

	const paginate = (pageNum) => {
		setCurrentPage(pageNum)
	}


	return ( 
		<div className="shop">
			<ShopItems cars={currentPosts} loading={loading} error={error} />
			<ShopPag postsPerPage={postsPerPage} totalPosts={carsArr.length} paginate={paginate}/>
		</div>
	 );
}
 
export default Shop;