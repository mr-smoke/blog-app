import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
      <Toaster />
    </>
  );
}

export default App;
