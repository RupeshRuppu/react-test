import React from "react";
import Loader from "./Loader";

function WithLoader(Component) {
	return function () {
		return (
			<>
				{<Component />}
				<section className="absolute inset-0 grid place-items-center">
					<Loader />
				</section>
			</>
		);
	};
}

export default WithLoader;
