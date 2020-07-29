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
  const [taxType, setTaxType] = useState("CGST+SGST");

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

  function randomString(len, an) {
    an = an && an.toLowerCase();
    var str = "",
      i = 0,
      min = an == "a" ? 10 : 0,
      max = an == "n" ? 10 : 35;
    for (; i++ < len; ) {
      var r = (Math.random() * (max - min) + min) << 0;
      str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
    }
    return str;
  }
  function generateInvNum() {
    //Helper function that generates => Invoice Number.
    const first = randomString(4, "a");
    const second = randomString(2, "n");
    const third = randomString(2, "n");
    const fourth = randomString(1, "a");
    const fifth = randomString(4, "n");

    console.log(`${first}/${second}-${third}/${fourth}${fifth}`);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="px-5 border col-md-10">
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
              <button
                className="btn btn-dark"
                onClick={() => setTaxType("CGST+SGST")}
              >
                CGST+SGST
              </button>
              <div>Selected Tax Type : {taxType}</div>
              <button
                className="btn btn-dark"
                onClick={() => setTaxType("IGST")}
              >
                IGST
              </button>
            </div>

            <div className="container-fluid py-1 ">
              <h4 className="bg-dark text-center text-white">ITEMS</h4>
              <InputField style={{ marginBottom: 10 }} />
              <div>
                <button
                  className="btn btn-dark"
                  onClick={() => generateInvNum()}
                >
                  Generate invoice number
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePage;
