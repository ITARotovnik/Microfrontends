import React, { lazy } from "react";
import "./App.css";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import Home from "./home";

const User = lazy(() => import("UserApp/App"));
const Ticket = lazy(()=> import("TicketApp/App"));
const Payment = lazy(()=> import("PaymentApp/App"));

function App() {
  

  return (
    <div className="App">
            <Header />

      <React.Suspense
        fallback={<div>Loading</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/*" Component={User} />
          <Route path="/ticket/*" Component={Ticket} />
          <Route path="/payment/*" Component={Payment} />


        </Routes>
      </React.Suspense>

    </div>
  );
}

export default App;