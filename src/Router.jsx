import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Forms/UserRegister/UserRegister";
import Homepage from "./pages/Homepage/Homepage";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register-user" element={<RegisterForm />} />
    </Routes>
  );
}
