import React from "react";

function Greeting(){

const cl={};  
let greeting='';
let date=new Date();
let time=date.getHours();
if(time>=1&&time<12){greeting='Morning';
cl.color='blue';
}
if(time>=12&&time<24){greeting='Afternoon';
cl.color='red';}
return ( <div id='head'><h1> Hello <span style={cl}>{greeting}</span></h1> 
</div>);

}

export default Greeting;