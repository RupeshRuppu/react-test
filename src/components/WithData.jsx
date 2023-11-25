import React, { useEffect, useState } from "react";

function WithData(Component, endpoint) {
	return function () {
		const [data, setData] = useState([]);

		useEffect(() => {
			setTimeout(async () => {
				const data = await (
					await fetch(
						`https://jsonplaceholder.typicode.com/${endpoint}?_limit=5`
					)
				).json();
				setData(data);
			}, 2000);
		}, []);

		return <Component data={data} />;
	};
}

export default WithData;
