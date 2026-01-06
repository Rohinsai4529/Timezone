import Info from './Info.jsx'
import Search from './Search.jsx'
import './Timezone.css'
import { useState } from "react";

export default function Timezone(){
     const [Time,setTime] =useState(
        {
         countryname:"Austria",
         countrycode:"AT",
         continent:"Europe",
        sunrise: "06:55",
        sunset:"17:04 ",
        time:"2025-12-16 15:30" ,
        }
);
let updateInfo = (res)=>{
setTime(res);
}


    return(
         
        <div className='timezone'>
            <h1 style={{marginTop:30}}>Time Zone App</h1>
            <Search updateInfo={updateInfo}/>
            <br/>
            <br/>
            <Info info={Time} />

        </div>
    )
}
