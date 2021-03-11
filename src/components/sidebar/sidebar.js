import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import firebase from "../../firebase";

function Sidebar() {

  const handleSignOut = () => {
        firebase.auth()
        .signOut()
        .then(function () {
          localStorage.clear();
        })
        .then(() =>
            setTimeout(() => {
              window.location.assign("http://143.110.242.45");
            }, 250)
        )
        .catch(function (error) {
          alert(error);
        });
  };

  return (
    <nav
      id="sidebarMenu"
      class="col-md-2 d-md-block sidebar-bg sidebar collapse "
    >
      <div class="sidebar-sticky pt-3 vh-100">
        <div class="brand brand-text text-center py-3">
          <span className="font-weight-bold">Invoicing </span>System
        </div>

        <ul class="nav flex-column mb-2 py-3">
          <li class="nav-item text-white p-2 ">
            <Link to="/" className="text-white">
              Invoices
            </Link>
          </li>
          <li class="nav-item text-white p-2 ">
            <Link to="/new" className="text-white">
              Recipients
            </Link>
          </li>

          <li class="nav-item text-white p-2 ">
            <Link to="/settings" className="text-white">
              Settings
            </Link>
          </li>
        </ul>
        <Link
          to="/create"
          className="btn btn-block btn-outline-light create-invoice-btn"
        >
          Create Invoice
        </Link>
        <button onClick={handleSignOut} className="btn btn-light align-self-center signout-button">
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
