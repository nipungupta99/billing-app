
import React, { useState } from "react";
import Modal from "react-modal";
import FormInput from "../../components/form-input/form-input.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
        console.log(state.customerName)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // await axios({
        //     method: "post",
        //     url: `http://13.82.137.224/recipients?uid=rohit13&recipientID=${props.val.id}`,
        //     headers: {},
        //     data: {
        //         customerName: `${state.customerName}`,
        //         customerBillingAddress: `${state.customerBillingAddress}`,
        //         customerGSTIN: `${state.customerGSTIN}`,
        //         placeOfSupply: `${state.placeOfSupply}`,
        //     },
        // });
        // props.update();
        // closeModal();
        console.log(state)
    };

    const {
        customerName,
        customerBillingAddress,
        customerGSTIN,
        placeOfSupply,
    } = state;

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
                <div className="d-flex flex-row justify-content-between" >
                    <div><h4>Edit Recepient Details</h4></div>
                    <div><FontAwesomeIcon size="lg" onClick={closeModal} icon={faTimes} /></div>
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
                        placeholder={props.data.customerBillingAddress}
                        label="Billing Addres"
                        type="text"
                        name="customerBillingAddress"
                        value={customerBillingAddress}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        placeholder={props.data.customerGSTIN}
                        label="GSTIN"
                        type="text"
                        name="customerGSTIN"
                        value={customerGSTIN}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        placeholder={props.data.placeOfSupply}
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

export default EditModal;