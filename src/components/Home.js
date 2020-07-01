import React from "react";
import Content from "./Content"

const Home = (props) => {
  const {cookieStatus} = props;

 
  return (
    <>
     <div>
       Hello my man!
       <br/>  
      <Content typeOfUser={cookieStatus.typeOfUser}/>
     </div>
    </>
  );
};

export default Home;
