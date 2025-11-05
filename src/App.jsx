import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Auth from "./pages/auth.jsx";
import Dashboard from "./pages/dashboard.jsx";
import MyTasks from "./pages/myTasks.jsx";

import AllTasks from "./pages/allTasks.jsx";
import CreateEditTask from "./pages/createEditTask.jsx";
import Profile from "./pages/profile.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-tasks" element={<MyTasks />} />

          <Route path="all-tasks" element={<AllTasks />} />
          <Route path="create-task" element={<CreateEditTask />} />
          <Route path="edit-task/:id" element={<CreateEditTask />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
