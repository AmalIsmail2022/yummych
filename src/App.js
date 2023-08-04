import Footer from "./Components/Utility/Footer";
import NavBar from "./Components/Utility/NavBar";
import CartPage from "./Pages/Auth/CartPage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import HomePage from "./Pages/Home/HomePage";
import { Routes, Route, HashRouter } from "react-router-dom";
import ProductsPage from "./Pages/Products/ProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import PayMethodPage from "./Pages/CheckOut/PayMethodPage";
import AdminAllProductPage from "./Pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrderDetalisPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./Pages/User/UserAllAddresPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminAddCouponPage from "./Pages/Admin/AdminAddCouponPage";
function App() {
  return (
    <div >
    <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="amalismail2022.github.io/yummych/#/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />   
          <Route path="/order/paymethod" element={<PayMethodPage />} />   
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} /> 
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} /> 
          <Route path="/admin/orders/23" element={<AdminOrderDetalisPage />} /> 
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} /> 
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} /> 
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} /> 
          <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
          <Route path='/user/allorders' element={<UserAllOrdersPage />} /> 
          <Route path='/user/favoriteproducts' element={<UserFavoriteProductsPage />} /> 
          <Route path='/user/addresses' element={<UserAllAddresPage />} /> 
          <Route path='/user/add-address' element={<UserAddAddressPage />} /> 
          <Route path='/user/edit-address' element={<UserEditAddressPage />} /> 
           <Route path='/user/profile' element={<UserProfilePage />}/> 
        </Routes>
      </HashRouter>
    <Footer/>
    </div>
  );
}

export default App;
