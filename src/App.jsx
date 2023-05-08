import { Routes, Route } from "react-router-dom";

import "./App.css";

import CreateProfile from "./Components/CreateProfile";
import EditProfile from "./Components/EditProfile";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="create-profile" element={<CreateProfile />} />
      </Routes>
    </>
  );
}

export default App;
