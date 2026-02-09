import { RouterProvider } from "react-router-dom";
import router from "./route/route"; // المسار للمكان اللي خزنت فيه router.js

function App() {
  return <RouterProvider router={router} />;
}

export default App;