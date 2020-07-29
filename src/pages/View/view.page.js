import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/sidebar";
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
import logo from "../../logo-social.png";
const styles = StyleSheet.create({
  companySection: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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

function MyDocument(props) {
  const [data, setData] = useContext(DataContext);
  const {
    invoiceInfo,
    generalInfo,
    customerInfo,
    bankInfo,
    amountInfo,
    itemInfo,
  } = data;
  let integrated = true;
  if (invoiceInfo.invoiceType === "IGST") {
    integrated = true;
  } else {
    integrated = false;
  }

  return (
    <Document>
      <Page size="A4">
        <View style={{ flex: 1, borderWidth: 5 }}>
          <View style={styles.companySection}>
            <Image src={logo} style={{ width: 95, height: 70 }} />
            <View>
              <Text style={styles.companyName}>
                ASPEK India Private Limited&nbsp;
              </Text>
              <Text style={{ textAlign: "left", fontSize: 11, padding: 1 }}>
                Email: ABC@xyz.com
              </Text>
              <Text style={{ textAlign: "left", fontSize: 11, padding: 1 }}>
                Tel: 9315696194
              </Text>
            </View>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>CIN</Text>
              <Text style={styles.value}>{generalInfo.cin}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Invoice Date</Text>
              <Text style={styles.value}>{invoiceInfo.invoiceDate}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>PAN</Text>
              <Text style={styles.value}>{generalInfo.pan}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Invoice Number</Text>
              <Text style={styles.value}>{invoiceInfo.invoiceNumber}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>GSTIN</Text>
              <Text style={styles.value}>{generalInfo.gstin}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>State</Text>
              <Text style={styles.value}>{generalInfo.state}</Text>
            </View>
          </View>
          <View style={styles.displayHeading}>
            <Text style={{ textAlign: "center" }}> TAX INVOICE</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Customer Name</Text>
              <Text style={styles.value}>{customerInfo.customerName}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Customer Billing Address</Text>
              <Text style={styles.value}>
                {customerInfo.customerBillingAddress}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Customer GSTIN</Text>
              <Text style={styles.value}>{customerInfo.customerGSTIN}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Place of Supply</Text>
              <Text style={styles.value}>{customerInfo.placeOfSupply}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Reverse Charges</Text>
              <Text style={styles.value}>
                {customerInfo.reverseChargeApplicable}
              </Text>
            </View>
            <View style={styles.textContainer}></View>
          </View>
          <View style={styles.br}></View>
          <View style={{ borderWidth: 1, borderColor: "black" }}>
            <View style={styles.tHeadView}>
              <Text style={[styles.tHead, { width: "5%" }]}>S No.</Text>
              <Text style={[styles.tHead, { width: "45%" }]}>
                Item Description
              </Text>
              <Text style={[styles.tHead, { width: "15%" }]}>SAC Code</Text>
              <Text style={[styles.tHead, { width: "10%" }]}>
                Taxable {"\n"} Value
              </Text>
              <Text style={[styles.tHead, { width: "10%" }]}>IGST @18%</Text>
              <Text style={[styles.tHead, { width: "15%" }]}>Total</Text>
            </View>

            <View style={styles.tDataView}>
              <Text style={[styles.tData, { width: "5%" }]}> 1</Text>
              <Text style={[styles.tData, { width: "45%" }]}>
                itemDescription
              </Text>
              <Text style={[styles.tData, { width: "15%" }]}>sacCode</Text>
              <Text style={[styles.tData, { width: "10%" }]}>taxableValue</Text>
              <Text style={[styles.tData, { width: "10%" }]}>igst</Text>
              <Text style={[styles.tData, { width: "15%" }]}>totalValue</Text>
            </View>
          </View>
          <View style={[styles.wrapper, { marginVertical: 15 }]}>
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>Bank Name</Text>
                <Text style={styles.value}>{bankInfo.bankName}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>Bank A/C No.</Text>
                <Text style={styles.value}>{bankInfo.bankAccountNumber}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>IFSC Code</Text>
                <Text style={styles.value}>{bankInfo.ifscCode}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>Branch</Text>
                <Text style={styles.value}>{bankInfo.branch}</Text>
              </View>
            </View>
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>TAXABLE AMOUNT</Text>
                <Text style={styles.value}>Rs. {amountInfo.taxableAmount}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>TOTAL TAX</Text>
                <Text style={styles.value}>Rs. {amountInfo.totalTax}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>INVOICE TOTAL</Text>
                <Text style={styles.value}>Rs. {amountInfo.invoiceTotal}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View>
              <Text>----------------------</Text>
              <Text style={{ fontSize: 12 }}>(Authorised Signatory)</Text>
            </View>
            <View style={{ width: "55%" }}></View>
          </View>
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              padding: 3,
              borderTopWidth: 1,
              borderTopColor: "gray",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "darkgray",
              }}
            >
              Regd Office: C-1/46, Krishan Vihar, New Delhi-110086
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function InvoiceView(props) {
  return (
    <>
      <PDFViewer width="80%" height={1170}>
        <DataProvider>{MyDocument()}</DataProvider>
      </PDFViewer>
      <PDFDownloadLink
        style={styles.downloadButton}
        document={MyDocument()}
        fileName="invoice.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </>
  );
}

export default InvoiceView;

// ReactPDF.render(<InvoiceView />, `${__dirname}/example.pdf`);
