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
    family: 'oswald',
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
        width: '45%',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'orange',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 15
    },
    pdfHeaderTitle: {
        family: 'Montserrat',
        fontSize: 12,
        fontWeight: 700,
        fontSize: 12,
        fontWeight: 700,
        color: 'green',
    },
    pdfHeaderSubSection: {
        family: 'Montserrat',
        fontSize: 12,
        fontWeight: 'thin',
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
        width: '25%',
        fontSize: 12,
    },
    pdfBulletStyle: {
        width: '10%',
        // backgroundColor: 'red',  
    },
    pdfContentSubSection: {
        fontSize: 12,
        fontWeight: 400,
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
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.project_manager}</Text>
                        </View>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Start Date:</Text>
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.startDate}</Text>
                        </View>
                    </View>

                    <View style={styles.pdfContainerHeaderSection}>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Sponsor :</Text>
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.project_sponsor}</Text>
                        </View>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project end Date:</Text>
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.finishDate}</Text>
                        </View>
                    </View>

                    <View style={styles.pdfContainerHeaderSection}>
                        <View style={styles.pdfContainerHeaderpart}>
                            <Text style={styles.pdfHeaderTitle}>Project Budget:</Text>
                            <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.budget}</Text>
                        </View>
                    </View>                    
                    
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Background: </Text>
                            <View style={styles.pdfContentContainer}>
                                <View style={styles.pdfContentContainerSection}>
                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                    <Text style={styles.pdfHeaderSubSection}>{props.data.charterlist.project_need}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Goal: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.goal ?
                                    JSON.parse(props.data.charterlist.goal).length > 0 ?
                                        JSON.parse(props.data.charterlist.goal).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.goal}
                                                    </Text>
                                                </View>
                                            </>)

                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Benefits: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.benefits ?
                                    JSON.parse(props.data.charterlist.benefits).length > 0 ?
                                        JSON.parse(props.data.charterlist.benefits).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.benefits}
                                                    </Text>
                                                </View>
                                            </>)
                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>InScope: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.InScope ?
                                    JSON.parse(props.data.charterlist.InScope).length > 0 ?
                                        JSON.parse(props.data.charterlist.InScope).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.InScope}
                                                    </Text>
                                                </View>
                                            </>)
                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>OutScope: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.outScope ?
                                    JSON.parse(props.data.charterlist.outScope).length > 0 ?
                                        JSON.parse(props.data.charterlist.outScope).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.outScope}
                                                    </Text>
                                                </View>
                                            </>)

                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Assumptions: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.assumptionTime ?
                                    JSON.parse(props.data.charterlist.assumptionTime).length > 0 ?
                                        JSON.parse(props.data.charterlist.assumptionTime).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.assumptionTime}
                                                    </Text>
                                                </View>
                                            </>)

                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Impact: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.impact ?
                                    JSON.parse(props.data.charterlist.impact).length > 0 ?
                                        JSON.parse(props.data.charterlist.impact).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.impact}
                                                    </Text>
                                                </View>
                                            </>)

                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Stakeholder: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.stakeholder ?
                                    JSON.parse(props.data.charterlist.stakeholder).length > 0 ?
                                        JSON.parse(props.data.charterlist.stakeholder).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.stakeholder}
                                                    </Text>
                                                </View>
                                            </>)

                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.pdfContainerContentSection}>
                        <View style={styles.pdfContainerContentPart}>
                            <Text style={styles.pdfContentTitle}>Risks: </Text>
                            <View style={styles.pdfContentContainer}>
                                {
                                props.data.charterlist.risks ?
                                    JSON.parse(props.data.charterlist.risks).length > 0 ?
                                        JSON.parse(props.data.charterlist.risks).map((list, index) => {
                                            return (<>
                                                <View style={styles.pdfContentContainerSection}>
                                                    {/* <Text style={styles.pdfBulletStyle}>&#8226;</Text> */}
                                                    <Text style={styles.pdfContentSubSection}>
                                                        {list.risks}
                                                    </Text>
                                                </View>
                                            </>)

                                        })
                                        : null
                                    : null
                                 }
                                
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}