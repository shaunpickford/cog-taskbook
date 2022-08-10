import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Tasks from "./components/Tasks/Tasks";
import Task from "./components/Tasks/Task";
import Users from "./components/Users/Users";

function App() {
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        {currentUser ? (
          // Signed in
          <Routes>
            <Route path="/" element={<Dashboard currentUser={currentUser} />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<Task />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        ) : (
          // Not signed in
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
