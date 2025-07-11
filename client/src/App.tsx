// client/src/App.tsx
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleAccount from "./pages/SingleAccount";
import SearchedForm from "./pages/SearchedForm";
import Messages from "./pages/Messages.p";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account/:id" element={<SingleAccount />} />
        <Route path="/search" element={<SearchedForm />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<SearchedForm />} />
      </Routes>
    </Router>
  );
}
