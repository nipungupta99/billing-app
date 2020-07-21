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
} from "@react-pdf/renderer";
import { DataContext, DataProvider } from "../../context/dataContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
  },
  heading: {
    marginBottom: 10,
    textAlign: "center",
    padding: 10,
    fontWeight: 900,
  },
  section: {
    flexWrap: "wrap",

    flexDirection: "row",
    justifyContent: "space-around",
  },
  textWrap: {
    fontSize: 11,
    width: "45%",
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#4b4e53",
    width: "30%",
  },
  value: {
    textAlign: "center",
    width: "60%",
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
  finalSection: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  downloadButton: {
    borderWidth: 1,
    padding: 5,
    color: "black",
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
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.heading}>TAX INVOICE</Text>
          <View style={styles.section}>
            <View style={styles.textWrap}>
              <Text style={styles.label}>CIN</Text>
              <Text style={styles.value}>{generalInfo.cin}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>PAN</Text>
              <Text style={styles.value}>{generalInfo.pan}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>GSTIN</Text>
              <Text style={styles.value}>{generalInfo.gstin}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>State</Text>
              <Text style={styles.value}>{generalInfo.state}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Invoice Date</Text>
              <Text style={styles.value}>{invoiceInfo.invoiceDate}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Invoice Number</Text>
              <Text style={styles.value}>{invoiceInfo.invoiceNumber}</Text>
            </View>
          </View>
          <View style={styles.br}></View>
          <View style={styles.section}>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Cust. Name</Text>
              <Text style={styles.value}>{customerInfo.customerName}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Bank Name</Text>
              <Text style={styles.value}>{bankInfo.bankName}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Cust. GSTIN</Text>
              <Text style={styles.value}>{customerInfo.customerGSTIN}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Bank A/C No.</Text>
              <Text style={styles.value}>{bankInfo.bankAccountNumber}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Customer Billing Address</Text>
              <Text style={styles.value}>
                {customerInfo.customerBillingAddress}
              </Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>IFSC Code</Text>
              <Text style={styles.value}>{bankInfo.ifscCode}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Place of Supply</Text>
              <Text style={styles.value}>{customerInfo.placeOfSupply}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Branch</Text>
              <Text style={styles.value}>{bankInfo.branch}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Reverse Charge Applicable</Text>
              <Text style={styles.value}>
                {customerInfo.reverseChargeApplicable}
              </Text>
            </View>
            <View style={styles.textWrap}></View>
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
            {itemInfo.map((item, idx) => (
              <View style={styles.tDataView}>
                <Text style={[styles.tData, { width: "5%" }]}>{idx + 1}</Text>
                <Text style={[styles.tData, { width: "45%" }]}>
                  {item.itemDescription}
                </Text>
                <Text style={[styles.tData, { width: "15%" }]}>
                  {item.sacCode}
                </Text>
                <Text style={[styles.tData, { width: "10%" }]}>
                  {item.taxableValue}
                </Text>
                <Text style={[styles.tData, { width: "10%" }]}>
                  {item.igst}
                </Text>
                <Text style={[styles.tData, { width: "15%" }]}>
                  {item.totalValue}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.br}></View>
          <View style={styles.finalSection}>
            <View style={{ paddingTop: 20 }}>
              <Text>---------------------------</Text>
              <Text style={{ fontSize: 12 }}>(Authorised Signatory)</Text>
            </View>
            <View>
              <View style={styles.textWrap}>
                <Text style={[styles.label, { width: "50%" }]}>
                  TAXABLE AMOUNT
                </Text>
                <Text style={[styles.value, { width: "70%" }]}>
                  {amountInfo.taxableAmount}
                </Text>
              </View>
              <View style={styles.textWrap}>
                <Text style={[styles.label, { width: "50%" }]}>TOTAL TAX</Text>
                <Text style={[styles.value, { width: "70%" }]}>5000</Text>
              </View>
              <View style={styles.textWrap}>
                <Text style={[styles.label, { width: "50%" }]}>
                  INVOICE TOTAL
                </Text>
                <Text style={[styles.value, { width: "70%" }]}>
                  {amountInfo.invoiceTotal}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function InvoiceView(props) {
  return (
    <>
      <PDFViewer width="100%" height={1170}>
        <DataProvider>{MyDocument()}</DataProvider>
      </PDFViewer>
      <PDFDownloadLink
        style={styles.downloadButton}
        document={MyDocument()}
        fileName="somename.pdf"
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
