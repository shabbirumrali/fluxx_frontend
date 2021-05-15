import React from "react";

const TitleList = (props) => {

    console.log(props);
    return (<><div className="progress_bar_details my-2">
            <div className="charter_heading">
                <div className="project_charter">
                    <h5>project charter</h5>
                </div>
                <div className="print_download">
                    <p>print/download</p>
                </div>
            </div>
            <div className="progress_bar_titles">
                <ul>
                    <li className={props.activeCls === 'step1' ? 'active':"" }>Project Name</li>
                    <li className={props.activeCls === 'step2' ? 'active':"" }>pm/sponsor</li>
                    <li className={props.activeCls === 'step3' ? 'active':"" }>background</li>
                    <li className={props.activeCls === 'step4' ? 'active':"" }>goals</li>
                    <li className={props.activeCls === 'step5' ? 'active':"" }>benefits</li>
                    <li className={props.activeCls === 'step6' ? 'active':"" }>scope</li>
                    <li className={props.activeCls === 'step7' ? 'active':"" }>schedule</li>
                    <li className={props.activeCls === 'step8' ? 'active':"" }>budget</li>
                    <li className={props.activeCls === 'step9' ? 'active':"" }>assumptions</li>
                    <li className={props.activeCls === 'step10' ? 'active':"" }>impact</li>
                    <li className={props.activeCls === 'step11' ? 'active':"" }>stakeholders</li>
                </ul>    
            </div>
        </div>
    </>);
}
export default TitleList;
