import React, { useContext, useEffect, useState } from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import { DataContext, DataProvider } from "../../context/dataContext";
import axios from "axios";
const styles = StyleSheet.create({
  companySection: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  companyName: {
    fontSize: 25,
    paddingVertical: 3,
  },
  textContainer: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  label: {
    fontSize: 11,
    color: "#4B4E53",
    width: "40%",
    textAlign: "left",
  },
  value: {
    fontSize: 11,
    width: "60%",
    textAlign: "right",
    fontWeight: "bold",
  },
  displayHeading: {
    marginVertical: 10,
    marginHorizontal: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  br: {
    margin: 8,
    borderWidth: 0.7,
    borderColor: "#9BA3AE",
  },
  tHeadView: {
    backgroundColor: "black",
    flexDirection: "row",
    padding: 7,
  },
  tHead: {
    textAlign: "center",
    color: "white",
    fontSize: 10,
  },
  tDataView: { borderBottomWidth: 1, padding: 5, flexDirection: "row" },
  tData: {
    textAlign: "center",
    fontSize: 10,
  },
});

function InvoiceView(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://143.110.242.45:3000/invoices/604146edf747b34987e58ad0#")
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const {
    invoiceInfo,
    generalInfo,
    customerInfo,
    bankInfo,
    amountInfo,
    itemInfo,
  } = data;

  console.log(data.amountInfo, 'data for invoice');

  return (
    <div>
      {/*<div className="p-3" >*/}
      {/*  <PDFDownloadLink*/}
      {/*      style={styles.downloadButton}*/}
      {/*      document={MyDocument()}*/}
      {/*      fileName="invoice.pdf"*/}
      {/*  >*/}
      {/*    {({ blob, url, loading, error }) =>*/}
      {/*        loading ? (*/}
      {/*            "Loading document..."*/}
      {/*        ) : (*/}
      {/*            <button className="btn btn-dark">Download Invoice</button>*/}
      {/*        )*/}
      {/*    }*/}
      {/*  </PDFDownloadLink>*/}
      {/*</div>*/}
      <PDFViewer width="100%" height={1170}>

      </PDFViewer>
    </div>
  );
}

export default InvoiceView;

// ReactPDF.render(<InvoiceView />, `${__dirname}/example.pdf`);
