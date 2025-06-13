import "./main.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchedForm from "./pages/SearchedForm";
import SingleAccount from "./pages/SingleAccount";
import Dashboard from "./pages/Dashboard"
import Messages from "./components/Messages";


const require  = true;



export default function App() {
  return (
    <div>
      <Messages/>
    </div>
  )
}