import React from "react";
import AuthPage from "./pages/Auth/auth.pages.js";
import InvoicesPage from "./pages/Invoices/invoices.page.js";
import Recepient from "./pages/recepients/recepient.pages";
import SettingsPage from "./pages/settings/settings.pages";
import CreatePage from "./pages/create/create.page";
import InvoiceView from "./pages/View/view.page";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/" component={InvoicesPage} />
      <Route exact path="/new" component={Recepient} />
      <Route exact path="/settings" component={SettingsPage} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/view" component={InvoiceView} />
    </Router>
  );
}

export default App;
