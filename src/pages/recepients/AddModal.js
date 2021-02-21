import React, { useState } from "react";
import Modal from "react-modal";
import FormInput from "../../components/form-input/form-input.component";
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

function AddModal(props) {
  const [state, setState] = useState({
    customerName: "",
    customerBillingAddress: "",
    customerGSTIN: "",
    placeOfSupply: "",
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
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios({
      method: "post",
      url: `http://localhost:3000/recipients?uid=root`,
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
  };

  const {
    customerName,
    customerBillingAddress,
    customerGSTIN,
    placeOfSupply,
  } = state;

  return (
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
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="customerName"
            value={customerName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Billing Addres"
            type="text"
            name="customerBillingAddress"
            value={customerBillingAddress}
            onChange={handleChange}
            required
          />
          <FormInput
            label="GSTIN"
            type="text"
            name="customerGSTIN"
            value={customerGSTIN}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Place Of Supply"
            type="text"
            name="placeOfSupply"
            value={placeOfSupply}
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

export default AddModal;
