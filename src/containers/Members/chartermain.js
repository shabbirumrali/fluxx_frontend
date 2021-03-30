import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Names from "./step1";
import Address from "./step2";
import Contact from "./step3";
import Goal from "./step4";
import Benefits from "./step5";
import InScope from "./step6";
import OutScope from "./step7";
import Schedule from "./step8";
import Budget from "./step9";
import Assumptions from "./step10";
import Impact from "./step11";
import Stakeholders from "./step12";
import Risks from "./step13";
//import "./styles.css";
const steps = [
  { id: "names"    },
  { id: "address"  },
  { id: "contact"  },
  { id: "goal"     },
  { id: "benefits" },
  { id: "inscope"  },
  { id: "outscope" },
  { id: "schedule" },
  { id: "budget" },
  { id: "assumption" },
  { id: "impact" },
  { id: "stakeholder" },
  { id: "risk" }
];
const MultiStepForm = (props) => {
  
 
    const objectdata = props.location.state !== undefined ? props.location.state.detail:{}; 
    const defaultData = {
        name: objectdata.name ? objectdata.name:"",
        project_manager: objectdata.project_manager ? objectdata.project_manager:"",
        project_sponsor: objectdata.project_sponsor ? objectdata.project_sponsor:"",
        project_need: objectdata.project_need ? objectdata.project_need:"",
        goal:objectdata.goal ? objectdata.goal: "",
        benefits:objectdata.benefits ? objectdata.benefits :"",
        InScope:objectdata.InScope ?  objectdata.InScope :"",
        outScope:objectdata.outScope ? objectdata.outScope :"",
        startDate:objectdata.startDate ? objectdata.startDate : "",
        finishDate:objectdata.finishDate ? objectdata.finishDate : "",
        budget:objectdata.budget ? objectdata.budget : "",
        assumptionTime:objectdata.assumptionTime ? objectdata.assumptionTime : "",
        impact:objectdata.impact ? objectdata.impact : "",
        stakeholder:objectdata.stakeholder ? objectdata.stakeholder : "",
        risks:objectdata.risks ? objectdata.risks : "",
      };


  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  if(objectdata.step != undefined){
    id = objectdata.step;
  }
  console.log(id);

  const props1 = { formData, setForm, navigation,id };
  switch (id) {
    case "names":
      return <Names {...props1} />;
    case "address":
      return <Address {...props1} />;
    case "contact":
      return <Contact {...props1} />;
    case "goal":
      return <Goal {...props1} />;
    case "benefits":
      return <Benefits {...props1} />;
    case "inscope":
      return <InScope {...props1} />;
    case "outscope":
      return <OutScope {...props1} />; 
    case "schedule":
      return <Schedule {...props1} />;  
    case "budget":
      return <Budget {...props1} />;
    case "assumption":
      return <Assumptions {...props1} />;    
    case "impact":
      return <Impact {...props1} />;    
    case "stakeholder":
      return <Stakeholders {...props1} />;         
    case "risk":
        return <Risks {...props1} />;
    default:
      return null;
  }
};

export default MultiStepForm;