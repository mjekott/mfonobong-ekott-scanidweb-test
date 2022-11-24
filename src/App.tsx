import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/screens/home/Home'));
const ProductDetails = lazy(
    () => import('@/screens/product-detail/ProductDetails'),
);
const CartPage = lazy(() => import('@/screens/cart/Cart'));

function App() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Home />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
}

export default App;
