import React, { useState, useEffect } from "react";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import Sidebar from "../../components/sidebar/sidebar";
import FormInput from "../../components/form-input/form-input.component";
import ExistingCustomer from "./ExistingCustomer";
import InputField from "./inputFields.js";
function CreatePage() {
  const [details, setDetails] = useState({
    customerName: "",
    customerBillingAddress: "",
    customerGSTIN: "",
    placeOfSupply: "",
  });
  const [taxType, setTaxType] = useState("");

  function recieveFromChild(data) {
    const {
      customerName,
      customerBillingAddress,
      customerGSTIN,
      placeOfSupply,
    } = data;
    setDetails({
      customerName,
      customerBillingAddress,
      customerGSTIN,
      placeOfSupply,
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="px-5 border col-md-10 ">
          <div className="container border">
            <HeadingPair
              heading="Create Invoice"
              subheading="Enter the invoice details below"
            />
            <div className="d-flex flex-row m-2 p-4">
              <ExistingCustomer update={recieveFromChild} />
            </div>
            <div className="container-fluid">
              <h4 className="bg-dark text-center text-white">DETAILS</h4>
              <div className="d-flex flex-row flex-wrap justify-content-start ">
                <FormInput
                  label="CUSTOMER NAME"
                  value={details.customerName}
                  onChange={(event) =>
                    setDetails({ customerName: event.target.value })
                  }
                />
                <FormInput
                  label="CUSTOMER BILLING ADDRESS"
                  value={details.customerBillingAddress}
                  onChange={(event) =>
                    setDetails({ customerBillingAddress: event.target.value })
                  }
                />
                <FormInput
                  label="CUSTOMER GSTIN"
                  value={details.customerGSTIN}
                  onChange={(event) =>
                    setDetails({ customerGSTIN: event.target.value })
                  }
                />
                <FormInput
                  label="PLACE OF SUPPLY"
                  value={details.placeOfSupply}
                  onChange={(event) =>
                    setDetails({ placeOfSupply: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-around">
              <button className="btn btn-dark">CGST+IGST</button>
              <button className="btn btn-dark">IGST</button>
            </div>

            <div className="container-fluid py-1 ">
              <h4 className="bg-dark text-center text-white">ITEMS</h4>
              <InputField style={{ marginBottom: 10 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePage;
