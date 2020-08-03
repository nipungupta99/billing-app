import React, { useState, createContext } from "react";

export const DetailsContext = createContext();
export const DetailsProvider = (props) => {
  const [details, setDetails] = useState({
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

  return (
    <DetailsContext.Provider value={[details, setDetails]}>
      {props.children}
    </DetailsContext.Provider>
  );
};
