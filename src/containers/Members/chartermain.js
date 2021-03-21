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

const defaultData = {
  name: "",
  project_manager: "",
  project_sponsor: "",
  project_need: "",
  goal:"",
  benefits:"",
  InScope:"",
  outScope:"",
  startDate:"",
  finishDate:"",
  budget:"",
  assumptionTime:"",
  impact:"",
  stakeholder:"",
  risks:""
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "goal":
      return <Goal {...props} />;
    case "benefits":
      return <Benefits {...props} />;
    case "inscope":
      return <InScope {...props} />;
    case "outscope":
      return <OutScope {...props} />; 
    case "schedule":
      return <Schedule {...props} />;  
    case "budget":
      return <Budget {...props} />;
    case "assumption":
      return <Assumptions {...props} />;    
    case "impact":
      return <Impact {...props} />;    
    case "stakeholder":
      return <Stakeholders {...props} />;         
    case "risk":
        return <Risks {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;