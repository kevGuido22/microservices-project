import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { ROUTE_PATHS } from "./routes";
import { Routes, Route } from "react-router";
import { CreateProduct } from "./components/pages/CreateProduct";

function App() {
    return (
        <>
            <NavBar />
            <main className="max-w-screen-lg mx-auto">
                <Routes>
                    <Route path={ROUTE_PATHS.HOME} element={<Home />} />
                    <Route
                        path={ROUTE_PATHS.ADD_PRODUCT}
                        element={<CreateProduct />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
