import React, { useEffect, useState } from "react";
import "./recepient.styles.scss";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import AddModal from "./AddModal";
import EditModal from "./UpdateModal";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Recepient() {
  //states definition
  const [data, setData] = useState([]); //state to store data from server

  const [ticker, setTicker] = useState(false); //ticker to update the page and api call
  const [search, setSearch] = useState("");

  const [recipientsCount, setRecipientsCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  //useEffect to fetch recepient data.
  useEffect(() => {
    axios
      .get(
        `http://143.110.242.45:3000/recipients?uid=root&page=${activePage}&limit=${itemsPerPage}&q=${search}`
      )
      .then(res => updateState(res));
  }, [ticker, search, activePage]);

  function updateState(res) {
    if (res.data.message == "error") {
      alert("No data Here");
    } else {
      setData(res.data.data);
      setRecipientsCount(res.data.count);
      setPageCount(res.data.pages);
    }
  }

  //function to delete recepient.
  function deleteRecepient(id) {
    axios
      .delete(
        `http://143.110.242.45:3000/recipients?uid=root&recipientID=${id}`
      )
      .then(res => setTicker(!ticker))
      .catch(err => alert("error in connection , please try again"));
  }

  function updateData() {
    setTicker(!ticker);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="px-4 border col-md-10 d-md-block">
          <div className="py-3">
            <div className="d-flex flex-row justify-content-between">
              <div className="position-relative">
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
                  <FontAwesomeIcon
                    style={{ marginTop: "4px" }}
                    icon={faSearch}
                  />
                </div>
              </div>

              <AddModal update={updateData} />
            </div>
          </div>
          <table className="table p-3 block">
            <thead className="thead-dark">
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Customer Name</th>
                <th scope="col">Billing Address</th>
                <th scope="col">GSTIN</th>
                <th scope="col">Place of Supply</th>
                <th scope="col">Action</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, idx) => (
                <tr>
                  {/* <th scope="row">{idx+1}</th> */}
                  <td>{val.customerName}</td>
                  <td>{val.customerBillingAddress} </td>
                  <td>{val.customerGSTIN}</td>
                  <td>{val.placeOfSupply}</td>
                  <td>
                    <EditModal data={val} update={updateData} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteRecepient(val._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {pageCount > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={recipientsCount}
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

export default Recepient;
