import React, { useState, useEffect } from "react";
import "./invoices.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/sidebar/sidebar.js";
import axios from "axios";
function InvoicesPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://13.82.137.224/invoices/search?uid=root&q=${search}`)
      .then((res) => setData(res.data.data));
  }, [search]);
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="px-5 border col-md-10 d-md-block ">
          <div className="py-4">
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: 5 }} />
            <input
              type="text"
              placeholder="Search"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <table className="table p-3 block">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Inv. Number </th>
                <th scope="col">Amount</th>
                <th scope="col">C. Name</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx + 1}>
                  <td>{row.invoiceInfo.invoiceDate}</td>
                  <td>{row.invoiceInfo.invoiceNumber}</td>
                  <td>{row.amountInfo.invoiceTotal}</td>
                  <td>{row.customerInfo.customerName}</td>
                  <td>
                    <Link
                      className="btn btn-dark"
                      to={{
                        pathname: "/view",
                        state: row,
                      }}
                    >
                      View{" "}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InvoicesPage;
