import React, { usePrevious, useState, useEffect } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function InputField() {
  const [state, setState] = useState({
    users: [{ itemDesc: "", sacCode: "", taxableValue: "", igst: 0 }],
  });

  // const prevState = usePrevious(state);

  function addClick() {
    setState({
      users: [...state.users, { itemDesc: "", sacCode: "", taxableValue: "" }],
    });
  }

  function createUI() {
    return state.users.map((item, idx) => (
      <div className="d-flex flex-row justify-content-around" key={idx}>
        <FormInput
          label="ITEM DESCRIPTION"
          name="itemDesc"
          value={item.itemDesc || ""}
          onChange={(e) => handleChange(idx, e)}
        />
        <FormInput
          sm
          label="SAC CODE"
          name="sacCode"
          value={item.sacCode || ""}
          onChange={(e) => handleChange(idx, e)}
        />
        <FormInput
          sm
          label="TAXABLE AMOUNT"
          name="taxableValue"
          value={item.taxableValue || ""}
          //onChange={(e) => handleChange(idx, e)}
          onChange={(e) => handleChange(idx, e)}
        />

        <div>
          <h4 style={{ fontSize: 20 }}>
            ₹{(item.taxableValue * 0.18).toFixed(2)}
          </h4>
          <p className="label"> IGST</p>
        </div>
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
          onClick={(e) => removeClick(item, e)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    ));
  }

  function handleChange(i, e) {
    const { name, value } = e.target;
    let users = [...state.users];
    users[i] = { ...users[i], [name]: value };
    setState({ users });
  }

  function removeClick(i, e) {
    let users = [...state.users];
    users.splice(i, 1);
    setState({ users });
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + JSON.stringify(state.users));
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {createUI()}
      <input
        className="btn btn-dark m-3"
        type="button"
        value="add more"
        onClick={addClick}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default InputField;
