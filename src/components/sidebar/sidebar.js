import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-2 d-md-block sidebar-bg sidebar collapse "
    >
      <div class="sidebar-sticky pt-3 vh-100">
        <div class="brand brand-text text-center py-3">
          <span className="font-weight-bold">Invoicing</span>Systems
        </div>

        <ul class="nav flex-column mb-2 py-3">
          <li class="nav-item text-white p-2 ">
            <Link to="/new" className="text-white">
              Recepients
            </Link>
          </li>
          <li class="nav-item text-white p-2">Current Month</li>
          <li class="nav-item text-white p-2">Current Month</li>
          <li class="nav-item text-white p-2">Current Month</li>
        </ul>
        <button className="btn btn-outline-light text-center btn-block">
          Create Invoice
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
