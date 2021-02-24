import React, { useState, useEffect } from "react";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import Sidebar from "../../components/sidebar/sidebar";
import FormInput from "../../components/form-input/form-input.component";
import ExistingCustomer from "./ExistingCustomer";
import InputField from "./inputFields.js";
import axios from "axios";
import moment from "moment";

function CreatePage() {
  const [normalInfo, setNormalInfo] = useState("");

  // Used in input fields - passed as props from here
  const [total, setTotal] = useState(0);

  // Used for item rows data -> passed as props in input fields
  const [state, setState] = useState({
    users: [{ itemDesc: "", sacCode: "", taxableValue: 0, igst: 0 }],
  });

  // const [details, setDetails] = useState({
  //   customerName: "",
  //   customerBillingAddress: "",
  //   customerGSTIN: "",
  //   placeOfSupply: "",
  // });

  // const [details, setDetails] = useState({
  const [customerName, setCustomerName] = useState("");
  const [customerBillingAddress, setCustomerBillingAddress] = useState("");
  const [customerGSTIN, setCustomerGSTIN] = useState("");
  const [placeOfSupply, setPlaceOfSupply] = useState("");
  // });

  const [taxType, setTaxType] = useState("CGST+SGST");

  // Getting company and general info data
  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/users/root?name=admin&password=password`
    );

    setNormalInfo(data.data.details);
    console.log("normal info", data.data.details);
  };

  // Fetching it initially only
  useEffect(() => {
    fetchData();
  }, []);

  function recieveFromChild(data) {
    const {
      customerName,
      customerBillingAddress,
      customerGSTIN,
      placeOfSupply,
    } = data;

    setCustomerName(customerName);
    setCustomerBillingAddress(customerBillingAddress);
    setCustomerGSTIN(customerGSTIN);
    setPlaceOfSupply(placeOfSupply);
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

    return `${first}/${second}-${third}/${fourth}${fifth}`;
  }

  const createInvoice = async () => {
    axios
      .post("http://localhost:3000/invoices?uid=root", {
        invoiceInfo: {
          invoiceDate: moment().format("D MMM YYYY"),
          invoiceNumber: generateInvNum(),
          invoiceType: "IGST",
        },
        generalInfo: {
          cin: normalInfo.cin,
          pan: normalInfo.pan,
          gstin: normalInfo.gstin,
          state: normalInfo.state,
          cName: normalInfo.companyName,
          cEmail: normalInfo.companyEmail,
          cPhoneNumber: normalInfo.companyPhone,
          cAddress: normalInfo.companyAddress,
        },
        customerInfo: {
          customerName,
          customerBillingAddress,
          customerGSTIN,
          placeOfSupply,
          reverseChargeApplicable: "NIL",
        },
        bankInfo: {
          bankName: normalInfo.bankName,
          bankAccountNumber: normalInfo.bankAccountNumber,
          ifscCode: normalInfo.ifscCode,
          branch: normalInfo.branch,
        },

        // {
        //   igst: 0.36,
        //   itemDesc: "",
        //   sacCode: "",
        //   taxableValue
        // }

        itemInfo: state.users.map(item => ({
          itemDescription: item.itemDesc,
          sacCode: item.sacCode,
          igst: item.igst,
          taxableValue: item.taxableValue,
          totalValue: item.taxableValue * 1.18,
        })),
        // [
        //   {
        //     itemDescription: "WERWFWE",
        //     sacCode: "SDFSDFD",
        //     taxableValue: "SFDSDFSD",
        //     // cgst: "DFSDFSDF",
        //     // sgst: "WERWEWE",
        //     igst: "WERWERWER",
        //     totalValue: "SDFSDFSD",
        //   },
        // ],
        amountInfo: {
          taxableAmount: `${total.toFixed(2)}`,
          // totalCGST: "1231",
          // totalSGST: "12133",
          // totalIGST: "12312",
          totalTax: `${(total * 0.18).toFixed(2)}`,
          invoiceTotal: `${(
            parseFloat(total) + parseFloat(total * 0.18)
          ).toFixed(2)}`,
        },
      })
      .then(res => console.log("Invoice Creation: ", res.data))
      .then(() => alert("Invoice Created Successfully."));
  };

  // useEffect(() => {
  //   console.log("customer fields: name ->", customerName);
  //   console.log("customer fields: billing address ->", customerBillingAddress);
  //   console.log("customer fields: gstin ->", customerGSTIN);
  //   console.log("customer fields: place of supply ->", placeOfSupply);
  // }, [customerName, customerBillingAddress, customerGSTIN, placeOfSupply]);

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
                  value={customerName}
                  onChange={event => setCustomerName(event.target.value)}
                />
                <FormInput
                  label="CUSTOMER BILLING ADDRESS"
                  value={customerBillingAddress}
                  onChange={event =>
                    setCustomerBillingAddress(event.target.value)
                  }
                />
                <FormInput
                  label="CUSTOMER GSTIN"
                  value={customerGSTIN}
                  onChange={event => setCustomerGSTIN(event.target.value)}
                />
                <FormInput
                  label="PLACE OF SUPPLY"
                  value={placeOfSupply}
                  onChange={event => setPlaceOfSupply(event.target.value)}
                />
              </div>
            </div>

            {/* <div className="d-flex flex-row justify-content-around">
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
            </div> */}

            <div className="container-fluid py-1 ">
              <h4 className="bg-dark text-center text-white">ITEMS</h4>
              <InputField
                state={state}
                setState={setState}
                total={total}
                setTotal={setTotal}
                createInvoice={createInvoice}
                style={{ marginBottom: 10 }}
                taxType={taxType}
              />
              {/* <div>
                <button
                  className="btn btn-dark"
                  onClick={() => generateInvNum()}
                >
                  Generate invoice number
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePage;
