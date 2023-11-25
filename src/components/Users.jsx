import React from "react";
import WithData from "./WithData";

function Users({ data }) {
	return <>{JSON.stringify(data, null, 3)}</>;
}

export default WithData(Users, "users");
