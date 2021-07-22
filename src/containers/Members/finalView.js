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
        justifyContent: 'space-between',
        display: 'flex'
        
    },
    head:{
        textAlign:'left'
    },
    date: {
        textAlign: 'right',
    },
    second:{
       fontWeight: 700,
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
    },
    titileOne:{
        fontWeight: 700,
        fontSize: 16
    },
    titileTwo:{
        textAlign:'right',
        fontWeight: 700,
        fontSize: 14
    }
});
export function PdfDocument(props) {
    console.log(props.data.charterlist);
      return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.head}>
                    <Text style={styles.title}>Pdf Dcoument testing on the real world</Text>
                    <Text style={styles.title}><Text style={styles.titileOne}>Project Name : </Text> 


                             <Text style={styles.titileTwo}>{props.data.charterlist.name }</Text>
                    </Text>
                    <Text style={styles.title}>

                          <Text style={styles.titileOne}>Project Manager : </Text>
                           <Text style={styles.titileTwo}>{props.data.charterlist.project_manager }</Text>
                           </Text>
                    <Text style={styles.title}><Text style={styles.titileOne}>Project Sponsor : </Text> <Text style={styles.titileTwo}>{props.data.charterlist.project_sponsor }</Text></Text>
                    <Text style={styles.title}><Text style={styles.titileOne}>Project Need : </Text> <Text style={styles.titileTwo}> {props.data.charterlist.project_need }</Text></Text>
                    <Text style={styles.title}>
                               <Text style={styles.titileOne}>Goals :</Text><Text style={styles.titileTwo}> 
                                        {
                                            props.data.charterlist.goal ?
                                            JSON.parse(props.data.charterlist.goal).length > 0 ?
                                            JSON.parse(props.data.charterlist.goal).map((list,index) => {
                                                return (<>
                                                         <Text> {list.goal} {"\n"}</Text>
                                                        </>)

                                            })
                                            :null
                                            :null 
                                           }
                               </Text>
                    </Text>
                    <Text style={styles.title}>
                           <Text style={styles.titileOne}>Benefits :</Text>
                            <Text style={styles.titileTwo}>
                                  {
                                    props.data.charterlist.benefits ?
                                    JSON.parse(props.data.charterlist.benefits).length > 0 ?
                                    JSON.parse(props.data.charterlist.benefits).map((list,index) => {
                                        return (<>
                                                 {list.benefits}
                                                </>)
                                    })
                                    :null
                                    :null 
                                   }
                            </Text>
                    </Text>
                    <Text style={styles.title}>
                          <Text style={styles.titileOne}>InScope : </Text>
                          <Text style={styles.titileTwo}>{props.data.charterlist.InScope }</Text>
                    </Text>
                    <Text style={styles.title}>
                          <Text style={styles.titileOne}>OutScope :</Text>
                          <Text style={styles.titileTwo}>{props.data.charterlist.outScope }</Text>
                    </Text>
                    <Text style={styles.title}>
                          <Text style={styles.titileOne}>StartDate :</Text>
                          <Text style={styles.titileTwo}>{props.data.charterlist.startDate }</Text>
                    </Text>
                    <Text style={styles.title}>

                               <Text style={styles.titileOne}>FinishDate :</Text>


                               <Text style={styles.titileTwo}>{props.data.charterlist.finishDate }</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Budget : </Text>

                        <Text style={styles.titileTwo}> {props.data.charterlist.budget }</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}> AssumptionTime : </Text>
                       <Text style={styles.titileTwo}>{props.data.charterlist.assumptionTime }</Text>
                    </Text>
                    

                    <Text style={styles.title}>
                      <Text style={styles.titileOne}>Impact : </Text>
                      <Text style={styles.titileTwo}>
                       {
                        props.data.charterlist.impact ?
                        JSON.parse(props.data.charterlist.impact).length > 0 ?
                        JSON.parse(props.data.charterlist.impact).map((list,index) => {
                            return (<>
                                     {list.impact}
                                    </>)
                        })
                        :null
                        :null 
                       }</Text>
                    </Text>
                    <Text style={styles.title}>
                       <Text style={styles.titileOne}>Stakeholder : </Text>
                       <Text style={styles.titileTwo}> {
                        props.data.charterlist.stakeholder ?
                        JSON.parse(props.data.charterlist.stakeholder).length > 0 ?
                        JSON.parse(props.data.charterlist.stakeholder).map((list,index) => {
                            return (<>
                                     {list.stakeholder}
                                    </>)
                        })
                        :null
                        :null 
                       }</Text>
                    </Text>  
                    <Text style={styles.title}>
                      <Text style={styles.titileOne}>Risks :</Text>
                      <Text style={styles.titileTwo}> 
                       {
                        props.data.charterlist.risks ?
                        JSON.parse(props.data.charterlist.risks).length > 0 ?
                        JSON.parse(props.data.charterlist.risks).map((list,index) => {
                            return (<>
                                     {list.risks}
                                    </>)
                        })
                        :null
                        :null 
                       }</Text>
                    </Text>
                </View>                          
            </Page>
        </Document>
    )
}