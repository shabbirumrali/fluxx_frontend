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
        padding: 30
    },
    title: {
        fontSize: 16,
        marginBottom: '20px',
    },
    head: {
        textAlign: 'center'
    },
    date: {
        textAlign: 'right',
    },
    second: {
        textAlgin: 'left',
        width: '100%',
        marginRight: 'auto'
    },
    title: {
        marginBottom: '20',
        width: '100%'
    },
    div: {
        display: 'table',
        paddingTop: '30px'
    },
    section: {
        width: "70%",
    },
    sign: {
        fontSize: 16,
    },
    undersign: {
        padding: 20,
        fontSize: 16,
        width: "100%",
        textAlign: "center"
    },
    tableRowsign: {
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
        fontSize: 16,
        padding: 10,
        whiteSpace: "nowrap",
        fontWeight: 700,
        fontFamily: "Oswald"
    },
    tableCellHead: {
        margin: "auto",
        marginTop: 5,
        fontSize: 16,
        padding: 10,
        fontWeight: 700,
        fontFamily: "Oswald"
    },
    pdfContainer: {
        width: '100%',
        // backgroundColor: 'red',
    },
    pdfContainerHeaderSection: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    pdfContainerHeaderpart: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'orange',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 15
    },
    pdfHeaderTitle: {
        fontSize: 14,
        fontWeight: 600,
    },
    pdfHeaderSubSection: {
        fontSize: 14,
        fontWeight: 400,
    },
    pdfContainerContentSection: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    pdfContainerContentPart: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'orange',
        justifyContent: 'flex-start',
        marginTop: 15,
    },
    pdfContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        // backgroundColor: 'red',
    },
    pdfContentContainerSection: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'green',
        marginBottom: 7
    },
    pdfContentTitle: {
        width: '20%',
    },
    pdfBulletStyle: {
        width: '10%',
        // backgroundColor: 'red',  
    },
    pdfContentSubSection: {
        fontSize: 14
    },
    pdfBulletStyle: {
        fontSize: 25,
        marginRight: 10
    }
});
export function PdfDocument(props) {
    console.log(props.data.charterlist);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Created by shabbir */}
                {/* ----------------------------------------- */}
                <View style={styles.pdfContainer}>

                    <View style={styles.pdfContainerHeaderSection}>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Title:</Text>
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.name}</Text>
                        </View>
                    </View>
                    <View style={styles.pdfContainerHeaderSection}>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Manager:</Text>
                            <Text style={styles.pdfHeaderSubSection}>fsdfds</Text>
                        </View>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Start Date:</Text>
                            <Text style={styles.pdfHeaderSubSection}>Hello fluxx</Text>
                        </View>
                    </View>

                    <View style={styles.pdfContainerHeaderSection}>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Sponsor :</Text>
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.project_sponsor}</Text>
                        </View>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project end Date:</Text>
                            <Text style={styles.pdfHeaderSubSection}>fluxx</Text>
                        </View>
                    </View>

                    <View style={styles.pdfContainerHeaderSection}>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Budget:</Text>
                            <Text style={styles.pdfHeaderSubSection}>1200$</Text>
                        </View>
                    </View>

                    <View style={styles.pdfContainerContentSection}>

                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Goal: </Text>
                            <View style={styles.pdfContentContainer}>
                                <View style={styles.pdfContentContainerSection}>
                                    <Text style={styles.pdfBulletStyle}>&#8226;</Text>
                                    <Text style={styles.pdfContentSubSection}>
                                        Text block example and other thing to think of I don't know what to do  and how to check because this spelling check is way to harder and this is only one example and other things to implements here
                                    </Text>
                                </View>
                                <View style={styles.pdfContentContainerSection}>
                                    <Text style={styles.pdfBulletStyle}>&#8226;</Text>
                                    <Text style={styles.pdfContentSubSection}>
                                        Text block example and other thing to think of I don't know what to do  and how to check because this spelling check is way to harder and this is only one example and other things to implements here
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

                {/* -------------------------------------------- */}
                {/* Seprate file create by shyam */}
                <View style={styles.head}>
                    <Text style={styles.title}>Pdf Dcoument testing on the real world</Text>
                    <Text style={styles.title}><Text style={styles.titileOne}>Project Name : </Text>


                        <Text style={styles.titileTwo}>{props.data.charterlist.name}</Text>
                    </Text>
                    <Text style={styles.title}>

                        <Text style={styles.titileOne}>Project Manager : </Text>
                        <Text style={styles.titileTwo}>{props.data.charterlist.project_manager}</Text>
                    </Text>
                    <Text style={styles.title}><Text style={styles.titileOne}>Project Sponsor : </Text> <Text style={styles.titileTwo}>{props.data.charterlist.project_sponsor}</Text></Text>
                    <Text style={styles.title}><Text style={styles.titileOne}>Project Need : </Text> <Text style={styles.titileTwo}> {props.data.charterlist.project_need}</Text></Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Goals :</Text><Text style={styles.titileTwo}>
                            {
                                props.data.charterlist.goal ?
                                    JSON.parse(props.data.charterlist.goal).length > 0 ?
                                        JSON.parse(props.data.charterlist.goal).map((list, index) => {
                                            return (<>
                                                <Text> {list.goal} {"\n"}</Text>
                                            </>)

                                        })
                                        : null
                                    : null
                            }
                        </Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Benefits :</Text>
                        <Text style={styles.titileTwo}>
                            {
                                props.data.charterlist.benefits ?
                                    JSON.parse(props.data.charterlist.benefits).length > 0 ?
                                        JSON.parse(props.data.charterlist.benefits).map((list, index) => {
                                            return (<>
                                                {list.benefits}
                                            </>)
                                        })
                                        : null
                                    : null
                            }
                        </Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>InScope : </Text>
                        <Text style={styles.titileTwo}>{props.data.charterlist.InScope}</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>OutScope :</Text>
                        <Text style={styles.titileTwo}>{props.data.charterlist.outScope}</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>StartDate :</Text>
                        <Text style={styles.titileTwo}>{props.data.charterlist.startDate}</Text>
                    </Text>
                    <Text style={styles.title}>

                        <Text style={styles.titileOne}>FinishDate :</Text>


                        <Text style={styles.titileTwo}>{props.data.charterlist.finishDate}</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Budget : </Text>

                        <Text style={styles.titileTwo}> {props.data.charterlist.budget}</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}> AssumptionTime : </Text>
                        <Text style={styles.titileTwo}>{props.data.charterlist.assumptionTime}</Text>
                    </Text>


                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Impact : </Text>
                        <Text style={styles.titileTwo}>
                            {
                                props.data.charterlist.impact ?
                                    JSON.parse(props.data.charterlist.impact).length > 0 ?
                                        JSON.parse(props.data.charterlist.impact).map((list, index) => {
                                            return (<>
                                                {list.impact}
                                            </>)
                                        })
                                        : null
                                    : null
                            }</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Stakeholder : </Text>
                        <Text style={styles.titileTwo}> {
                            props.data.charterlist.stakeholder ?
                                JSON.parse(props.data.charterlist.stakeholder).length > 0 ?
                                    JSON.parse(props.data.charterlist.stakeholder).map((list, index) => {
                                        return (<>
                                            {list.stakeholder}
                                        </>)
                                    })
                                    : null
                                : null
                        }</Text>
                    </Text>
                    <Text style={styles.title}>
                        <Text style={styles.titileOne}>Risks :</Text>
                        <Text style={styles.titileTwo}>
                            {
                                props.data.charterlist.risks ?
                                    JSON.parse(props.data.charterlist.risks).length > 0 ?
                                        JSON.parse(props.data.charterlist.risks).map((list, index) => {
                                            return (<>
                                                {list.risks}
                                            </>)
                                        })
                                        : null
                                    : null
                            }</Text>
                    </Text>
                </View>
            </Page>
        </Document>
    )
}