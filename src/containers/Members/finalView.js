import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Font
} from "@react-pdf/renderer";
import moment from "moment";

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        
        padding: 40
    },
    title:{
        fontSize: 24,
        marginBottom: '20px',
        
    },
    head:{
        textAlign:'center'
    },
    date: {
        textAlign: 'right',
    },
    second:{
        textAlgin:'left',
        width: '100%',
        marginRight: 'auto'
    },
    title:{
        marginBottom: '20',
        width: '100%'
    },
    div:{
        display: 'table',
        paddingTop: '30px'
    },
    section:{
        width: "70%", 
    },
    sign:{
        fontSize: 16,
    },
    undersign:{
        padding: 20,
        fontSize: 16,
        width: "100%",
        textAlign:"center"
    },
    tableRowsign:{
        margin: "auto", 
        flexDirection: "row" 
    },
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0,
        marginTop: '20px'
    }, 
    tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
    }, 
    tableCol: { 
        width: "25%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0, 
    }, 
    tableCell: { 
        margin: "auto", 
        marginTop: 5, 
        fontSize: 15, 
        padding: 10
    },
    tableCellWhite: { 
        margin: "auto", 
        marginTop: 5, 
        fontSize: 20, 
        padding: 10,
        whiteSpace: "nowrap",
        fontWeight: 700,
        fontFamily: "Oswald"
    },
    tableCellHead:{
        margin: "auto", 
        marginTop: 5, 
        fontSize: 20, 
        padding: 10,
        fontWeight: 700,
        fontFamily: "Oswald"
    }
});
export function PdfDocument(props) {
    console.log(props.data.charterlist);
      return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.head}>
                    <Text style={styles.title}>Pdf Dcoument testing on the real world</Text>
                    <Text style={styles.title}>Project Name : {props.data.charterlist.name }</Text>
                    <Text style={styles.title}>Project Manager : {props.data.charterlist.project_manager }</Text>
                    <Text style={styles.title}>Project Sponsor : {props.data.charterlist.project_sponsor }</Text>
                    <Text style={styles.title}>Project Need : {props.data.charterlist.project_need }</Text>
                    <Text style={styles.title}>Goals : {props.data.charterlist.goal }</Text>
                    <Text style={styles.title}>Benefits : {props.data.charterlist.benefits }</Text>
                    <Text style={styles.title}>InScope : {props.data.charterlist.InScope }</Text>
                    <Text style={styles.title}>OutScope : {props.data.charterlist.outScope }</Text>
                    <Text style={styles.title}>StartDate : {props.data.charterlist.startDate }</Text>
                    <Text style={styles.title}>FinishDate : {props.data.charterlist.finishDate }</Text>
                    <Text style={styles.title}>Budget : {props.data.charterlist.budget }</Text>
                    <Text style={styles.title}>AssumptionTime : {props.data.charterlist.assumptionTime }</Text>
                    <Text style={styles.title}>Impact : {props.data.charterlist.impact }</Text>
                    <Text style={styles.title}>Stakeholder : {props.data.charterlist.stakeholder }</Text>
                    <Text style={styles.title}>Risks : {props.data.charterlist.risks }</Text>
                </View>                          
            </Page>
        </Document>
    )
}