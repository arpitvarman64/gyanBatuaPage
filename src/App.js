import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import VerifyOtp from "./Component/VerifyOtp";
import EmailVerified from "./Component/EmailVerified";
import ForgotPassword from "./Component/ForgotPassword";
import VerifyForgot from "./Component/VerifyForgot";
import Login from "./Component/Login";
import MarketPlace from "./Component/MarketPlace";
import Faqs from "./Component/Faqs";
import About from "./Component/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <Link to="/">MarketPlace</Link>{" "}
          <Link to="/verifyOtp">Verify OTP</Link>{" "}
          <Link to="/forgotPassword">Forgot Password</Link>{" "}
          <Link to="/verifyForgot">Verify Forgot</Link>{" "}
          <Link to="/faqs">FAQs</Link>{" "}
          <Link to="/login">Login</Link>{" "}
          <Link to="/emailVerified">Email Verified</Link>{" "}
          <Link to="/about">About</Link>
        </div>
        {/* <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route path="discovery" element={<Discovery />} />
          </Route>
         
        </Routes> */}

        <Routes>
          <Route path="/" element={<MarketPlace />}></Route>
          <Route path="/verifyOtp" element={<VerifyOtp />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/verifyForgot" element={<VerifyForgot />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/emailVerified" element={<EmailVerified />}></Route>
          <Route path="/about" element={<About />}></Route>
          
        </Routes>

        {/* path="/"
       path="/verifyOtp"
       path="/forgotPassword"
       path="/verifyForgot"
       path="/faqs"
       path="/login"
       path="/emailVerified"
       path="/about" */}
      </BrowserRouter>
    </div>
  );
}

export default App;
