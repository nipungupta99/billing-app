import React, { usePrevious, useState, useEffect, useCallback } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function InputField({ state, setState, ...props }) {
  useEffect(() => {
    kalkulate();

    console.log("create invoice -> input field", state);
  }, [state]);

  // const prevState = usePrevious(state);

  function addClick() {
    setState({
      users: [
        ...state.users,
        { itemDesc: "", sacCode: "", taxableValue: 0, igst: 0 },
      ],
    });
  }

  function taxFields(item) {
    if (props.taxType === "IGST") {
      return (
        <div>
          <h4 style={{ fontSize: 20 }}>
            ₹{(item.taxableValue * 0.18).toFixed(2)}
          </h4>
          <p className="label"> IGST</p>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-row">
          <div>
            <h4 style={{ fontSize: 20 }}>
              ₹{(item.taxableValue * 0.09).toFixed(2)}
            </h4>
            <p className="label"> CGST</p>
          </div>
          &nbsp; &nbsp;
          <div>
            <h4 style={{ fontSize: 20 }}>
              ₹{(item.taxableValue * 0.09).toFixed(2)}
            </h4>
            <p className="label"> SGST</p>
          </div>
        </div>
      );
    }
  }

  function createUI() {
    return state.users.map((item, idx) => (
      <div className="d-flex flex-row justify-content-around" key={idx}>
        <FormInput
          label="ITEM DESCRIPTION"
          name="itemDesc"
          value={item.itemDesc || ""}
          onChange={e => handleChange(idx, e)}
        />
        <FormInput
          sm
          label="SAC CODE"
          name="sacCode"
          value={item.sacCode || ""}
          onChange={e => handleChange(idx, e)}
        />
        <FormInput
          sm
          label="TAXABLE AMOUNT"
          name="taxableValue"
          value={item.taxableValue || ""}
          //onChange={(e) => handleChange(idx, e)}
          onChange={e => {
            handleChange(idx, e, true);
          }}
        />

        {taxFields(item)}
        <div>
          <h4 style={{ fontSize: 20 }}>
            ₹
            {(
              parseFloat((item.taxableValue * 18) / 100) +
              parseFloat(item.taxableValue)
            ).toFixed(2)}
          </h4>
          <p className="label"> Total</p>
        </div>
        <div
          type="button"
          className="btn btn-default"
          value="remove"
          onClick={e => removeClick(item, e)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    ));
  }

  function handleChange(i, e, amountChange = false) {
    const { name, value } = e.target;

    console.log("handleChange", amountChange);

    if (amountChange === true) {
      let users = [...state.users];
      users[i] = {
        ...users[i],
        [name]: value,
        igst: value * 0.18,
        cgst: value * 0.09,
        sgst: value * 0.09,
      };
      setState({ users });
    } else {
      let users = [...state.users];
      users[i] = { ...users[i], [name]: value };
      setState({ users });
    }
  }

  const handleLog = useCallback(
    name => {
      console.log(state.users);
      console.log(name);
    },
    [state]
  );

  function removeClick(i, e) {
    let users = [...state.users];
    users.splice(i, 1);
    setState({ users });
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + JSON.stringify(state.users));
    event.preventDefault();
  }

  // let number = 0;
  function kalkulate() {
    props.setTotal(
      state.users.reduce((acc, curr) => acc + parseInt(curr.taxableValue), 0)
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {createUI()}
        <input
          className="btn btn-dark m-3"
          type="button"
          value="add more"
          onClick={addClick}
        />
      </form>
      <div className="container-fluid">
        <h4 className="bg-dark text-center text-white">PREVIEW</h4>
        <div className="d-flex flex-column px-5 mx-5 justify-content-center ">
          <div className="d-flex flex-row justify-content-between">
            <p>TAXABLE AMOUNT</p>
            &nbsp; &nbsp;
            <p>{props.total.toFixed(2)}</p>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <p>TOTAL TAX</p>
            &nbsp; &nbsp;
            <p>{(props.total * 0.18).toFixed(2)}</p>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <p>INVOICE TOTAL</p>
            &nbsp; &nbsp;
            <p>
              {(
                parseFloat(props.total) + parseFloat(props.total * 0.18)
              ).toFixed(2)}
            </p>
          </div>
          <button className="btn btn-dark" onClick={props.createInvoice}>
            Create Invoice
          </button>
        </div>
      </div>
    </>
  );
}

export default InputField;
