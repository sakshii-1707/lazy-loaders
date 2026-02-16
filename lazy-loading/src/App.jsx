import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Components/dashboard"));

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          Loading...
        </div>
      }
    >
      <Dashboard />
    </Suspense>
  );
}

export default App;