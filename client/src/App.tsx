// client/src/App.tsx
import "./main.css"
import Messages from "./components/Messages";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SingleAccount from "./pages/SingleAccount";
import Login from "./pages/Login";
import SearchForm from "./components/SearchForm";
import SearchedForm from "./pages/SearchedForm";

export default function App() {
  return (
    <div>
      <SingleAccount/>
    </div>
  );
}