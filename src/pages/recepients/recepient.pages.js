import React, { useEffect, useState } from "react";
import "./recepient.styles.scss";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import FormInput from "../../components/form-input/form-input.component";
import Modal from "react-modal";
import NewModal from "./modalRecepient";
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

function Recepient() {
  //functions for modal control
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  //   function afterOpenModal() {

  //   }

  function closeModal() {
    setIsOpen(false);
  }

  //states definition
  const [data, setData] = useState([]); //state to store data from server
  const [ticker, setTicker] = useState(false); //ticker to update the page and api call
  const [state, setState] = useState({
    //state for data for adding new recepient
    customerName: "",
    customerBillingAddress: "",
    customerGSTIN: "",
    placeOfSupply: "",
  });

  useEffect(() => {
    axios
      .get("http://13.82.137.224/recipients?uid=rohit13")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log("error"));
  }, [ticker]);

  function deleteRecepient(id) {
    axios
      .delete(`http://13.82.137.224/recipients?uid=rohit13&recipientID=${id}`)
      .then((res) => setTicker(!ticker))
      .catch((err) => alert("error in connection , please try again"));
  }

  const {
    customerName,
    customerBillingAddress,
    customerGSTIN,
    placeOfSupply,
  } = state;

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="px-5 border col-md-10 d-md-block ">
          <div className="py-4">
            <div className="d-flex flex-row justify-content-between">
              <input type="text" placeholder="Search" />
              <div>
                <button className="btn btn-outline-dark" onClick={openModal}>
                  Add a New Recepient
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  //onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div>Add a New Recepient</div>
                  <form>
                    <FormInput
                      label="Name"
                      type="text"
                      value={customerName}
                      //onChange={handleChange}
                      required
                    />
                    <FormInput label="Billing Addres" type="text" required />
                    <FormInput label="GSTIN" type="text" required />
                    <FormInput label="Place Of Supply" type="text" required />
                    <button className="btn btn-dark btn-block" type="submit">
                      Submit
                    </button>
                  </form>
                </Modal>
              </div>
              <NewModal />
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
                    <button
                      className="btn btn-dark"
                      onClick={() => console.log("button pressed")}
                    >
                      Edit
                    </button>
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
        </div>
      </div>
    </div>
  );
}

export default Recepient;
