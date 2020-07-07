import React from "react";
import "./invoices.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../../components/sidebar/sidebar.js'
function InvoicesPage() {
  return (
    <div className="container-fluid">
      <div className="row">
       <Sidebar />
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
