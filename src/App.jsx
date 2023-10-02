import Home from "./pages/home/Home";
import "./app.scss";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

const App = () => {
  const user = sessionStorage.getItem("USER");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home type="Genre" />} />
        {/* <Route index element={<Home />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch/:id" element={<Watch />} />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
