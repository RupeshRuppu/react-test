import React from "react";
import WithData from "./WithData";
import WithLoader from "./WithLoader";

function Users({ data }) {
	return <>{JSON.stringify(data, null, 3)}</>;
}

export default WithLoader(WithData(Users, "users"));
