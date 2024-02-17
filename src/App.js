import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
