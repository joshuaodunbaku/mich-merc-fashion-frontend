import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Product from './Routes/Product';
import Category from './Components/Category';
import Shop from './Routes/Shop';
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
				<Route path="/test" element={<Category />} />
			</Routes>
		</>
	);
}

export default App
