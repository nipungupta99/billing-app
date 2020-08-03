import React from "react";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import FormInput from "../../components/form-input/form-input.component";

function AccountDetails() {
  return (
    <div className=" px-5 container border my-4">
      <HeadingPair
        heading="Account Details"
        subheading="Edit your account details below"
      />
      <form action="">
        <div className="d-flex px-5 flex-row flex-wrap justify-content-around ">
          <FormInput label="NAME" />
          <FormInput label="EMAIL" />
          <FormInput label="PHONE NUMBER" />
          <FormInput label="PASSWORD" />
        </div>
        <button className=" btn btn-block btn-dark my-3">Done</button>
      </form>
    </div>
  );
}
export default AccountDetails;
