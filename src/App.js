import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./components/Home";

function App() {
  return <Home />;
  // if (!authContext.isAuthenticated) {
  //   return <LoadingSpinner />;
  // } else {
  //   return <Home />;
  // }
}

export default App;
