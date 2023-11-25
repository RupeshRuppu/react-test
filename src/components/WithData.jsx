import React, { useEffect, useState } from "react";

function WithData(Component, endpoint) {
	return function WithDataWrapper({ updateState }) {
		const [data, setData] = useState([]);

		useEffect(() => {
			(async () => {
				const data = await (
					await fetch(
						`https://jsonplaceholder.typicode.com/${endpoint}?_limit=5`
					)
				).json();
				setData(data);
				updateState(data);
			})();
		}, []);

		return <Component data={data} />;
	};
}

export default WithData;
