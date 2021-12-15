import { Routes, Route } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import UserDataFormPage from "./pages/UserDataFormPage/UserDataFormPage.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserDataFormPage />} />
      <Route path="/checkout" exact element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
