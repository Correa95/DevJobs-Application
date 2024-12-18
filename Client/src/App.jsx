import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Jobs from "./Components/Jobs";
import Job from "./Components/Job";
import SignInForm from "./Components/SignInForm";
import ApplicationForm from "./Components/ApplicationForm";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? (
        <>
          <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/job/:id" element={<Job />} />
            <Route path="/applicationForm" element={<ApplicationForm />} />
          </Routes>
        </>
      ) : (
        <SignInForm setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;
