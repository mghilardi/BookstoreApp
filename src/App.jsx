import "./App.css";
import Navbar from "./components/navbar";
import { ShopContextProvider } from "./context/ShopContext";
import ApplicationRoutes from "./routes/ApplicationRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShopContextProvider>
        <ApplicationRoutes />
        <ToastContainer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
