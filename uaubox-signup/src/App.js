import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage.component";
import UserDataFormPage from "./pages/UserDataFormPage.component";
import "./Sass/main.scss";
import { fetchAddress } from "./utils/BrasilApi";

function App() {
  fetchAddress("24320040");

  return (
    <Routes>
      <Route path='/' element={<UserDataFormPage />} />
      <Route path='/checkout' exact element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
