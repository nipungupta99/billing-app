import React, { useState } from "react";
import Modal from "react-modal";
import FormInput from "../../components/form-input/form-input.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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

function EditModal(props) {
  const [state, setState] = useState({
    customerName: props.data.customerName,
    customerBillingAddress: props.data.customerBillingAddress,
    customerGSTIN: props.data.customerGSTIN,
    placeOfSupply: props.data.placeOfSupply,
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  //   function afterOpenModal() {

  //   }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log(state.customerName);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios({
      method: "put",
      url: `http://143.110.242.45:3000/recipients?uid=root&recipientID=${props.data._id}`,
      headers: {},
      data: {
        customerName: `${state.customerName}`,
        customerBillingAddress: `${state.customerBillingAddress}`,
        customerGSTIN: `${state.customerGSTIN}`,
        placeOfSupply: `${state.placeOfSupply}`,
      },
    });
    props.update();
    closeModal();
    console.log(state);
  };

  return (
    <div>
      <button className="btn btn-dark" onClick={openModal}>
        Edit
      </button>

      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex flex-row justify-content-between">
          <div>
            <h4>Edit Recepient Details</h4>
          </div>
          <div>
            <FontAwesomeIcon size="lg" onClick={closeModal} icon={faTimes} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <FormInput
            placeholder={props.data.customerName}
            label="Name"
            type="text"
            name="customerName"
            value={state.customerName}
            //value={customerName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Billing Address"
            type="text"
            name="customerBillingAddress"
            //value={customerBillingAddress}
            value={state.customerBillingAddress}
            onChange={handleChange}
            required
          />
          <FormInput
            label="GSTIN"
            type="text"
            name="customerGSTIN"
            //value={customerGSTIN}
            value={state.customerGSTIN}
            onChange={handleChange}
            required
          />
          <FormInput
            placeholder={props.data.placeOfSupply}
            label="Place Of Supply"
            type="text"
            name="placeOfSupply"
            //value={placeOfSupply}
            value={state.placeOfSupply}
            onChange={handleChange}
            required
          />
          <button className="btn btn-dark btn-block" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default EditModal;
