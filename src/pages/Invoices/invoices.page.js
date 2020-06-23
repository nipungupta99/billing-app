import React from "react";
import "./invoices.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function InvoicesPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          class="col-md-2 d-md-block sidebar-bg sidebar collapse ">
          <div class="sidebar-sticky pt-3 vh-100">
            <div class="brand brand-text text-center py-3">
              <span className="font-weight-bold">Invoicing</span>Systems
            </div>

            <ul class="nav flex-column mb-2 py-3">
              <li class="nav-item text-white p-2 ">Current Month</li>
              <li class="nav-item text-white p-2">Current Month</li>
              <li class="nav-item text-white p-2">Current Month</li>
              <li class="nav-item text-white p-2">Current Month</li>
            </ul>
            <button className="btn btn-outline-light text-center btn-block">
              Create Invoice
            </button>
          </div>
        </nav>
        <div className="px-5 border col-md-10 d-md-block ">
          <div className="py-4">
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: 5 }} />
            <input type="text" placeholder="Search" />
          </div>
          <table class="table p-3 block">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InvoicesPage;
