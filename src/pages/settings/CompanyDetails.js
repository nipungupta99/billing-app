import React, { useEffect } from "react";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import FormInput from "../../components/form-input/form-input.component";
import axios from "axios";
function CompanyDetails() {
  const [data, setData] = React.useState({
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    companyPhone: "",
    industry: "",
    state: "",
    branch: "",
    cin: "",
    pan: "",
    gstin: "",
    bankName: "",
    bankAccountNumber: "",
    ifscCode: "",
  });
  useEffect(() => {
    axios
      .get(`http://13.82.137.224/users/root?name=rohitchu&password=password`)
      .then((res) => setData(res.data.data.details));
  }, []);
  function handleChange(evt) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://13.82.137.224/users/root`, {
        companyName: data.companyName,
        companyAddress: data.companyAddress,
        companyEmail: data.companyEmail,
        companyPhone: data.companyPhone,
        industry: data.industry,
        state: data.state,
        branch: data.branch,
        cin: data.cin,
        pan: data.pan,
        gstin: data.gstin,
        bankName: data.bankName,
        bankAccountNumber: data.bankAccountNumber,
        ifscCode: data.ifscCode,
      })
      .then((res) => console.log(res));
  }
  return (
    <div className=" px-5 container border my-4">
      <HeadingPair
        heading="Company Details"
        subheading="Edit your company details below"
      />
      <form onSubmit={handleSubmit}>
        <div className="d-flex px-5 flex-row flex-wrap justify-content-around ">
          <FormInput
            label="COMPANY NAME"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="CIN"
            name="cin"
            value={data.cin}
            onChange={handleChange}
            required
          />
          <FormInput
            label="COMPANY ADDRESS"
            name="companyAddress"
            value={data.companyAddress}
            onChange={handleChange}
            required
          />
          <FormInput
            label="PAN"
            name="pan"
            value={data.pan}
            onChange={handleChange}
            required
          />
          <FormInput
            label="COMPANY EMAIL"
            name="companyEmail"
            value={data.companyEmail}
            onChange={handleChange}
            required
          />
          <FormInput
            label="GSTIN"
            name="gstin"
            value={data.gstin}
            onChange={handleChange}
            required
          />
          <FormInput
            label="COMPANY PHONE"
            name="companyPhone"
            value={data.companyPhone}
            onChange={handleChange}
            required
          />
          <FormInput
            label="BANK NAME"
            name="bankName"
            value={data.bankName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="INDUSTRY"
            name="industry"
            value={data.industry}
            onChange={handleChange}
            required
          />
          <FormInput
            label="BANK A/C NO."
            name="bankAccountNumber"
            value={data.bankAccountNumber}
            onChange={handleChange}
            required
          />
          <FormInput
            label="STATE"
            name="state"
            value={data.state}
            onChange={handleChange}
            required
          />
          <FormInput
            label="IFSC CODE"
            name="ifscCode"
            value={data.ifscCode}
            onChange={handleChange}
            required
          />
          <FormInput
            label="BRANCH"
            name="branch"
            value={data.branch}
            onChange={handleChange}
            required
          />
          <div style={{ width: "35%" }}></div>
        </div>
        <button className="btn btn-block btn-dark my-3 " type="submit">
          Done
        </button>
      </form>
    </div>
  );
}
export default CompanyDetails;
