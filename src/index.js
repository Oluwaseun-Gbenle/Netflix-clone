import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import "./index.css";
import { store } from "./store/store";
import Profile from "./Profile";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route exact path="*" element={<Login />} />
        <Route exact path="/App" element={<App />} />
        <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);
