import React, { useState, useEffect, useContext } from "react";
import "./invoices.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/sidebar/sidebar.js";
import axios from "axios";
import moment from "moment";
import { DataContext } from "../../context/dataContext.js";
import Pagination from "react-js-pagination";

function InvoicesPage() {
  const [invoices, setInvoices] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useContext(DataContext);
  const [exists, setExists] = useState(false);

  const [invoicesCount, setInvoicesCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    console.log("invoices =>", invoices);
  }, [invoices]);

  useEffect(() => {
    axios
      .get(
        `http://143.110.242.45:3000/invoices/search?uid=root&page=${activePage}&limit=${itemsPerPage}&q=${search}`
      )
      .then(res => {
        if (res.data.data === "No invoices.") {
          setExists(false);
        } else {
          setExists(true);
          setInvoices(res.data.data);
          setInvoicesCount(res.data.count);
          setPageCount(res.data.pages);
        }
      });
  }, [search, activePage]);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="px-4 col-md-10 d-md-block ">
          {/* <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    <img
                      width="20"
                      height="20"
                      className="ml-3"
                      src={GreyGlobe}
                      alt="Validation Error"
                    />
                  </div> */}

          <div className="my-3 position-relative">
            <input
              className="py-1"
              style={{ paddingLeft: "32px" }}
              type="text"
              placeholder="Search"
              onChange={event => setSearch(event.target.value)}
            />
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "32px",
                height: "32px",
              }}
            >
              <FontAwesomeIcon style={{ marginTop: "4px" }} icon={faSearch} />
            </div>
          </div>
          {!exists ? (
            <h3 className="text-center mt-3">No Invoices</h3>
          ) : (
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
                {exists &&
                  invoices.map((row, idx) => (
                    <tr key={idx + 1}>
                      <td>
                        {moment(row.invoiceInfo.invoiceDate).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                      </td>
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
                          onClick={() => setData(row)}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}

          {pageCount > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={invoicesCount}
                pageRangeDisplayed={pageCount}
                onChange={changedPageNumber => setActivePage(changedPageNumber)}
                linkClass="pag-item"
                activeLinkClass="pag-item-active"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoicesPage;
