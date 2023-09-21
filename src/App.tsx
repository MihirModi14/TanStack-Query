import { Route, Routes, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Todos } from "./pages/Todos/Todos.component";
import { Todos2 } from "./pages/Todos2/Todos2.component";
import { Todos3 } from "./pages/Todos3/Todos3.component";

import "./App.scss";

// Query client object
const queryClient = new QueryClient();
// Note: Keep this outside of component, If it's inside the component then on every render, new client will be initialized which will remove all cached data.

function App() {
  // React Router Hooks
  const navigate = useNavigate();

  return (
    <>
      <ul className="note">
        <p>Read This,</p>
        <li>
          1. Keep console open (for checking whether data is being fetched from
          api or cache) and react query devtools open (for checking state of
          data ex. fresh, invalidating, stale).
        </li>
        <li>
          2. First read readme file and more specifically Theoretical Overview
          section.
        </li>
        <li>3. Don't forgot to start server.</li>
      </ul>
      <div className="toggle">
        <div>
          <button onClick={() => navigate("/")}>Task 1</button>
          <button onClick={() => navigate("/2")}>Task 2</button>
          <button onClick={() => navigate("/3")}>Task 3</button>
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Todos />}></Route>
          <Route path="/2" element={<Todos2 />}></Route>
          <Route path="/3" element={<Todos3 />}></Route>
        </Routes>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
