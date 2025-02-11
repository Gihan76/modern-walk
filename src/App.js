import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { RouterConfig } from "./navigation/RouterConfig";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
