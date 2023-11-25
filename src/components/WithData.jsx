import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function WithData(Component, endpoint) {
	return function WithDataWrapper() {
		const [data, setData] = useState([]);

		useEffect(() => {
			(async () => {
				const data = await (
					await fetch(
						`https://jsonplaceholder.typicode.com/${endpoint}?_limit=5`
					)
				).json();
				setData(data);
			})();
		}, []);

		if (Object.keys(data).length === 0)
			return (
				<section className="absolute inset-0 grid place-items-center">
					<Loader />
				</section>
			);
		return <Component data={data} />;
	};
}

export default WithData;
