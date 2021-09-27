import React, {useState,useEffect,useCallback} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "./content";

const Layout = (props) => {
  console.log(props);
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);  
  useEffect(() => {   	
  	if(props.location.state !== undefined){
  	 if(props.location.state.loginopen == true){
      console.log(props.location.state.loginopen);
  		 setModal(true);
  	 }
    }
      
   },[]);
  //  const [panelsData, changePanel] = useState(data);
  //  useEffect(() => {
  //   setModal(data);
  // }, [data]);

  return (
    <>
      <Header toggle={toggle} className="signin" modal={modal} />
      <Content toggle={toggle} className="signin" modal={modal} />
      <Footer />
    </>
  );
};

export default Layout;
