import React from "react";
import AuthPage from "./pages/Auth/auth.pages.js";
import InvoicesPage from "./pages/Invoices/invoices.page.js";
import Recepient from "./pages/recepients/recepient.pages"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/" component={InvoicesPage} />
      <Route exact path="/new" component={Recepient} />
    </Router>
  );
}

export default App;
