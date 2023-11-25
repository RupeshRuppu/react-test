import React from "react";
import WithData from "./WithData";

function Posts({ data }) {
	return <>{JSON.stringify(data, null, 4)}</>;
}

export default WithData(Posts, "posts");
