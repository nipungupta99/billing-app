import React, { useContext } from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { DataContext } from "../../context/dataContext";

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
});

function MyDocument() {
  const [data, setData] = useContext(DataContext);
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.heading}>TAX INVOICE</Text>
          <View style={styles.section}>
            <View style={styles.textWrap}>
              <Text style={styles.label}>CIN</Text>
              <Text style={styles.value}></Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>PAN</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>GSTIN</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>State</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Invoice Date</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Invoice Number</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
          </View>
          <View style={styles.br}></View>
          <View style={styles.section}>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Cust. Name</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Bank Name</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Cust. GSTIN</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Bank A/C No.</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Customer Billing Address</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>IFSC Code</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Place of Supply</Text>
              <Text style={styles.value}>R0239583409UOJBDS2</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Branch</Text>
              <Text style={styles.value}>NIL</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.label}>Reverse Charge Applicable</Text>
              <Text style={styles.value}>NIL</Text>
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
            <View style={styles.tDataView}>
              <Text style={[styles.tData, { width: "5%" }]}>1</Text>
              <Text style={[styles.tData, { width: "45%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "15%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "10%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "10%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "15%" }]}>Hello</Text>
            </View>
            <View style={styles.tDataView}>
              <Text style={[styles.tData, { width: "5%" }]}>2</Text>
              <Text style={[styles.tData, { width: "45%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "15%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "10%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "10%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "15%" }]}>Hello</Text>
            </View>
            <View style={styles.tDataView}>
              <Text style={[styles.tData, { width: "5%" }]}>3</Text>
              <Text style={[styles.tData, { width: "45%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "15%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "10%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "10%" }]}>Hello</Text>
              <Text style={[styles.tData, { width: "15%" }]}>Hello</Text>
            </View>
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
                <Text style={[styles.value, { width: "70%" }]}>500</Text>
              </View>
              <View style={styles.textWrap}>
                <Text style={[styles.label, { width: "50%" }]}>TOTAL TAX</Text>
                <Text style={[styles.value, { width: "70%" }]}>5000</Text>
              </View>
              <View style={styles.textWrap}>
                <Text style={[styles.label, { width: "50%" }]}>
                  INVOICE TOTAL
                </Text>
                <Text style={[styles.value, { width: "70%" }]}>100000000</Text>
              </View>
            </View>
          </View>
        </View>
        <Text>hello</Text>
      </Page>
    </Document>
  );
}

export default MyDocument;
