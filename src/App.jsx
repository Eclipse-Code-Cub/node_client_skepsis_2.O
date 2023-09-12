import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./components/Pages/Home/HomePage";
import { Faq } from "./components/Pages/Home/Faq/Faq";


const router = createBrowserRouter([
  {
    path: "/",
    element:<> <HomePage/>
    <Faq/>
    </> ,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },

  
]);

function App() {
  return (
    <main>
      
    <RouterProvider router={router}>
      
</RouterProvider>
</main>
  )
}

export default App
