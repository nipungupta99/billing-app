import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ExistingCustomer(props) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`http://13.82.137.224/recipients/search?uid=root&q=${search}`)
      .then((res) => setData(res.data.data));
  }, [search]);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("open");
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn btn-dark" onClick={openModal}>
        Select Existing Customer
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => setSearch(event.target.value)}
        />
        <table className="table p-3 block">
          <thead className="thead-dark">
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Customer Name</th>
              <th scope="col">Billing Address</th>
              <th scope="col">GSTIN</th>
              <th scope="col">Place of Supply</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, idx) => (
              <tr
                className="pointer"
                onClick={() => {
                  props.update(val);
                  closeModal();
                }}
              >
                {/* <th scope="row">{idx+1}</th> */}
                <td>{val.customerName}</td>
                <td>{val.customerBillingAddress} </td>
                <td>{val.customerGSTIN}</td>
                <td>{val.placeOfSupply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </div>
  );
}
export default ExistingCustomer;
