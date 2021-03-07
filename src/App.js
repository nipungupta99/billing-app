import React, { useContext } from "react";
import AuthPage from "./pages/Auth/auth.pages.js";
import InvoicesPage from "./pages/Invoices/invoices.page.js";
import Recepient from "./pages/recepients/recepient.pages";
import SettingsPage from "./pages/settings/settings.pages";
import CreatePage from "./pages/create/create.page";
import InvoiceView from "./pages/View/view.page";

import { HashRouter as Router, Route } from "react-router-dom";
import { LoginContext } from "./context/loginContext";
function App() {
  const [login, setLogin] = useContext(LoginContext);

  console.log(login, "login status");
  return (
    <Router>
      {login ? (
        <>
          <Route exact path="/" component={InvoicesPage} />
          <Route exact path="/new" component={Recepient} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/view" component={InvoiceView} />
        </>
      ) : (
        <Route exact path="/" component={AuthPage} />
      )}
    </Router>
  );
}

export default App;
