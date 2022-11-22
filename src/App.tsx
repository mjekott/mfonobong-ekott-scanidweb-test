import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/screens/home/Home'));
const ProductDetails = lazy(
    () => import('@/screens/product-detail/ProductDetails'),
);
const Cart = lazy(() => import('@/screens/cart/Cart'));

function App() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/slug" element={<ProductDetails />} />
            </Routes>
        </Suspense>
    );
}

export default App;
