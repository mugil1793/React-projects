// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./todoList/TodoList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>React Todo App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>

        <Routes>
          {/* Route now uses element instead of component */}
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
