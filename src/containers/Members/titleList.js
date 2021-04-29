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
                    <li>background</li>
                    <li>goals</li>
                    <li>benefits</li>
                    <li>scope</li>
                    <li>schedule</li>
                    <li>budget</li>
                    <li>assumptions</li>
                    <li>impact</li>
                    <li>stakeholders</li>
                </ul>    
            </div>
        </div>
    </>);
}
export default TitleList;
