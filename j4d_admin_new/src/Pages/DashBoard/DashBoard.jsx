import TopNav from "../JobFlow/Components/Navbar/TopNavBar"
import React, { useRef } from 'react';
const DashBoard =({updatedObject})=>{
    
    return(
        <div className="Dashboard">
            <TopNav id='visible'/>
            <h1>Me Dashboard Hu </h1>
            <p>{JSON.stringify(updatedObject, null, 2)}</p>
        </div>
    )
    
}
export default DashBoard