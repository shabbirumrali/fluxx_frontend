import React, { useState, useEffect, useCallback } from "react";
import { useForm, useStep } from "react-hooks-helper";
import Names from "./step1";
import Address from "./step2";
import Contact from "./step3";
import Goal from "./step4";
import Benefits from "./step5";
import InScope from "./step6";
import Schedule from "./step7";
import Budget from "./step8";
import Assumptions from "./step9";
import Impact from "./step10";
import Stakeholders from "./step11";
import Risks from "./step12";
import MovieList from "./finalLview";
//import "./styles.css";
import axios from 'axios';
import appConfig from "./../../config";
const steps = [
  { id: "names"    },
  { id: "address"  },
  { id: "contact"  },
  { id: "goal"     },
  { id: "benefits" },
  { id: "inscope"  },  
  { id: "schedule" },
  { id: "budget" },
  { id: "assumption" },
  { id: "impact" },
  { id: "stakeholder" },
  { id: "risk" },
  { id: "print" }
];
const MultiStepForm = (props) => {
  console.log(props); 
  const objectdata = props.location.state !== undefined ? props.location.state.detail:{};      
  const defaultData = {
    name: objectdata.name ? objectdata.name:"",
    project_manager: objectdata.project_manager ? objectdata.project_manager:"",
    project_sponsor: objectdata.project_sponsor ? objectdata.project_sponsor:"",
    project_need: objectdata.project_need ? objectdata.project_need:"",
    goal:objectdata.goal ? JSON.parse(objectdata.goal): null,
    benefits:objectdata.benefits ? JSON.parse(objectdata.benefits) :null,
    InScope:objectdata.InScope ? JSON.parse(objectdata.InScope) :null,
    outScope:objectdata.outScope ? JSON.parse(objectdata.outScope) :null,
    startDate:objectdata.startDate ? objectdata.startDate : "",
    finishDate:objectdata.finishDate ? objectdata.finishDate : "",
    budget:objectdata.budget ? objectdata.budget : "",
    assumptionTime:objectdata.assumptionTime ? JSON.parse(objectdata.assumptionTime) :null,
    impact:objectdata.impact ? JSON.parse(objectdata.impact): null,
    stakeholder:objectdata.stakeholder ? JSON.parse(objectdata.stakeholder)  : null,
    risks:objectdata.risks ? JSON.parse(objectdata.risks) : null,        
    step:objectdata.step ? objectdata.step :""
  };

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });

  let { id } = step;
  // if(objectdata.step != undefined){
  //   id = objectdata.step;
  // }
  // if(id == ''){
  //   id = 'names';
  // }
  console.log(id);
  console.log(objectdata.step);
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
    case "print":
          return <MovieList {...props1} />;    
    default:
      return null;
  }
};

export default MultiStepForm;