import React from "react";


const Home = (props) => {
  const {cookieStatus} = props;

  return (
    <>
     <div>
       Hello my man!
       <br/>  
       {cookieStatus.typeOfUser === "admin" ? <p>If you can read this quote, have to be Admin</p> : null}
     </div>
    </>
  );
};

export default Home;
