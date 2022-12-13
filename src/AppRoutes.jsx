import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { useContext } from "react";

const Private = ({ children }) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route
              exact
              path="/dashboard"
              element={
                <Private>
                  <Dashboard />
                </Private>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default AppRoutes;
