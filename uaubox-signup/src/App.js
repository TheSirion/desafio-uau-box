import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import UserDataFormPage from "./pages/UserDataFormPage/UserDataFormPage.component";
import "./Sass/main.scss";

function App() {
  return (
    <Routes>
      <Route path='/' element={<UserDataFormPage />} />
      <Route path='/checkout' exact element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
