import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts.jsx";
import Users from "./components/Users.jsx";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<main className="w-screen h-screen flex flex-col">
				<Header />
				<section className="flex flex-1 p-3 relative">
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/users" element={<Users />} />
					</Routes>
				</section>
			</main>
		</BrowserRouter>
	</React.StrictMode>
);
