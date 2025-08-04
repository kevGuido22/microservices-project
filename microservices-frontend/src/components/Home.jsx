import { Card } from "./Card";
import { NavLink } from "react-router";
import { ROUTE_PATHS } from "./../routes/index";

export function Home() {
    return (
        <section className="mt-8">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl">Products</h2>
                <NavLink
                    className="p-4 bg-sky-700 hover:bg-sky-800 rounded-md text-white cursor-pointer"
                    to={ROUTE_PATHS.ADD_PRODUCT}
                >
                    Create Product
                </NavLink>
            </div>
            <div className="mt-5 grid gap-4">
                <Card title={"iPhone 15"} price={100000} quantity={50} />
                <Card title={"Titulo"} price={100000} quantity={50} />
                <Card title={"Titulo"} price={100000} quantity={50} />
            </div>
        </section>
    );
}
