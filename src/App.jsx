import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Product from './Routes/Product';
import Category from './Components/Category';
import Shop from './Routes/Shop';
import Dashboard from "./Routes/Dashboard";
import ViewItems from "./Routes/ViewItems";
import CreateItems from "./Routes/CreateItems";
import Orders from "./Routes/Orders";
import ChangePw from "./Routes/ChangePw";
// import KiddiesHome from "../../kiddies-and-me/src/Routes/Home"

function App() {
	return (
		<>
			<Routes>
				<Route index path={"/"} element={<Home />} />
				<Route path="/about" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:category" element={<Category />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/view-items" element={<ViewItems />} />
				<Route path="/dashboard/create-items" element={<CreateItems />} />
				<Route path="/dashboard/orders" element={<Orders />} />
				<Route path="/dashboard/change-pw" element={<ChangePw />} />
				<Route path="/test" element={<Category />} />
			</Routes>
		</>
	);
}

export default App
