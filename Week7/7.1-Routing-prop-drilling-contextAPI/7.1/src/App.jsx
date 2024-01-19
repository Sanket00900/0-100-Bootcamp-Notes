import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const Landing = lazy(() => import("./routes/Landing"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const CountApp = lazy(() => import("./components/CountApp"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/count"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CountApp />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
