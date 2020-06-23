import React from "react";
import AuthPage from "./pages/Auth/auth.pages.js";
import InvoicesPage from "./pages/Invoices/invoices.page.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" component={InvoicesPage} />
    </Router>
  );
}

export default App;
