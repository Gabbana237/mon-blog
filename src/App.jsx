import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ShowPost from "./pages/ShowPost";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyEmailPrompt from "./pages/VerifyEmailPrompt";

function AppLayout() {
  const location = useLocation();
  const hideLayout = ["/login", "/register", "/verify-email", "/verify-email-message"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-email-message" element={<VerifyEmailPrompt/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:id" element={<ShowPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}