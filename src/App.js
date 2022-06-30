import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { State } from "./api/context";

function App() {
  // context
  const { page } = State();
  return (
    <>
      {page === 0 && <Home />}
      {page === 1 && <Cart />}
      {page === 2 && <Login />}
    </>
  );
}

export default App;
