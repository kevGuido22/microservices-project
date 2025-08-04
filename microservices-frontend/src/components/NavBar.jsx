import { NavLink } from "react-router";
import { ROUTE_PATHS } from "../routes";

export function NavBar() {
    return (
        <nav className="bg-gray-800 p-6 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">
                <NavLink to={ROUTE_PATHS.HOME}>My Store</NavLink>
            </h1>
            <ul className="flex space-x-4">
                <li>
                    <a
                        href="http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?client_id=react-client&redirect_uri=http:http://localhost:5173&response_type=code&scope=openid"
                        className="text-white hover:text-gray-300"
                    >
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}
