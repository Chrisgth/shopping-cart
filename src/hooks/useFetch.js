import { useEffect, useState } from "react"

const useFetch = (endpoint) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(endpoint, { signal: abortController.signal })
			.then(response => {
				if(!response.ok) {
					throw Error('Could not fetch data')
				}
				console.log(response)
				return response.json()
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
				setError(null)
			})
			.catch((e) => {
				if(e.name === 'AbortError') {

				} else {
					setError(e.message)
					setIsPending(false)
				}
			})
			return () => abortController.abort()
	}, [endpoint]);

	return {data, isPending, error}
}

export default useFetch