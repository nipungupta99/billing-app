import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import FormInput from "../../components/form-input/form-input.component";
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

function NewModal() {
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

  const handleChange = () => {
    console.log("hello");
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
        <form>
          <FormInput
            label="Name"
            type="text"
            value={customerName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Billing Addres"
            type="text"
            value={customerBillingAddress}
            onChange={handleChange}
            required
          />
          <FormInput
            label="GSTIN"
            type="text"
            value={customerGSTIN}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Place Of Supply"
            type="text"
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

export default NewModal;
