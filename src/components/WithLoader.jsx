import React, { useState } from "react";
import Loader from "./Loader";

function WithLoader(Component) {
	return function WithLoaderWrapper() {
		const [data, setData] = useState([]);
		const updateState = value => {
			setData(value);
		};
		return (
			<>
				{<Component updateState={updateState} />}
				<section className="absolute inset-0 grid place-items-center">
					{Object.keys(data).length === 0 ? <Loader /> : null}
				</section>
			</>
		);
	};
}

export default WithLoader;
