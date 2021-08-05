import React, {useState,useEffect,useCallback} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "./content";

const Layout = (props) => {
	
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => { 
  	//console.log(props.location.state.loginopen);
  	if(props.location.state !== undefined){
  	 if(props.location.state.loginopen == true){
  		setModal(true);
  	 }
    }
      
   },[]);

  return (
    <>
      <Header toggle={toggle} className="signin" modal={modal} />
      <Content />
      <Footer />
    </>
  );
};

export default Layout;
