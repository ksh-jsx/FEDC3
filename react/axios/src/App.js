import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Input from "./components/input/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/input" element={<Input />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </Router>
  );
}

export default App;
