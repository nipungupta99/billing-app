import React from "react";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import Sidebar from "../../components/sidebar/sidebar";
import FormInput from "../../components/form-input/form-input.component";
function CreatePage() {
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
              <button className="btn btn-dark">Select Existing Customer</button>
            </div>
            <div className="container-fluid">
              <h4 className="bg-dark text-center text-white">DETAILS</h4>
              <div className="d-flex flex-row flex-wrap justify-content-start ">
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
              </div>
            </div>
            <div className="container-fluid">
              <h4 className="bg-dark text-center text-white">ITEMS</h4>
              <div className="d-flex flex-row justify-content-start ">
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
              </div>
              <div className="d-flex flex-row justify-content-start ">
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
              </div>
              <div className="d-flex flex-row justify-content-start ">
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
                <FormInput label="Name" />
              </div>
              <button className=" text-center btn btn-dark my-3">
                Add More Item
              </button>
            </div>
            <div className="container-fluid">
              <h4 className="bg-dark text-center text-white">PREVIEW</h4>
              <div className="d-flex flex-column px-5 mx-5 justify-content-center ">
                <div className="d-flex flex-row justify-content-between">
                  <p>TAXABLE AMOUNT</p>
                  &nbsp; &nbsp;
                  <p>40000 </p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p>TAXABLE AMOUNT</p>
                  &nbsp; &nbsp;
                  <p>40000 </p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p>TAXABLE AMOUNT</p>
                  &nbsp; &nbsp;
                  <p>40000 </p>
                </div>
                <button className="btn btn-dark">Create Invoice</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePage;
