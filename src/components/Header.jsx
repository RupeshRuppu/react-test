import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="h-20 bg-blue-500 shadow-lg p-4 flex items-center">
			<ul className="flex space-x-6 text-xl text-white">
				<Link to={"/"} className="cursor-pointer">
					Home
				</Link>
				<Link to={"/posts"} className="cursor-pointer">
					Posts
				</Link>
				<Link to={"/users"} className="cursor-pointer">
					Users
				</Link>
			</ul>
		</header>
	);
}

export default Header;
