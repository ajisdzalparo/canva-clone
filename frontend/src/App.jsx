import { BrowserRouter } from "react-router";
import { RouterLayouts } from "./routes";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterLayouts />
      </BrowserRouter>
    </>
  );
}

export default App;
