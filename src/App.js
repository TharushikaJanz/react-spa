import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInformationView from "./components/UserInformationView";
import UserView from "./components/UserView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserView />} />
        <Route path="/user/:id" element={<UserInformationView />} />
      </Routes>
    </Router>
  );
}

export default App;
