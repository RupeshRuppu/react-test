import React from "react";
import WithData from "./WithData";
import WithLoader from "./WithLoader";

function Posts({ data }) {
	return <>{JSON.stringify(data, null, 4)}</>;
}

export default WithLoader(WithData(Posts, "posts"));
