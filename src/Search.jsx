import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';
export default function Search ({updateInfo}){
     const [city,setCity] =useState("");
     const [error,setError]=useState(false);
    //  console.log("ENV:", import.meta.env);

    //  const COUNTRY=import.meta.env.VITE_COUN;
    // const API_URL=import.meta.env.VITE_API;
    // const KEY =import.meta.env.VITE_K;
//    let timeZone = async ()=>{
//     try{
//             let latlong= await fetch (`${COUNTRY}?q=${city}&featureCode=PCLI&maxRows=1&username=${KEY}`)
//     let latlongres = await latlong.json();
//     if (!latlongres.geonames || latlongres.geonames.length === 0) {
//   console.error("No data from GeoNames", latlongres);
//   return;
// }

// let lat = latlongres.geonames[0].lat;
// let long = latlongres.geonames[0].lng;
//      let res = await fetch(`${API_URL}?lat=${lat}&lng=${long}&username=${KEY}`)
//      let jsonres = await res.json();
//      let result ={
//         countryname:jsonres.countryName,
//         countrycode:jsonres.countryCode,
//         continent:jsonres.timezoneId,
//         sunrise:jsonres.sunrise,
//         sunset:jsonres.sunset,
//         time:jsonres.time,
//      };
//      return result;
//    } catch (error){
// throw error;
//    }
// }

let timeZone = async () => {
  try {
    // 1️⃣ Call backend to search country
    let latlong = await fetch(`/api/geonames?q=${city}`);
    let latlongres = await latlong.json();

    if (!latlongres.geonames || latlongres.geonames.length === 0) {
      throw new Error("No such country");
    }

    const { lat, lng } = latlongres.geonames[0];

    // 2️⃣ Call backend to get timezone
    let res = await fetch(`/api/geonames?lat=${lat}&lng=${lng}`);
    let jsonres = await res.json();

    let result = {
      countryname: jsonres.countryName,
      countrycode: jsonres.countryCode,
      continent: jsonres.timezoneId,
      sunrise: jsonres.sunrise,
      sunset: jsonres.sunset,
      time: jsonres.time,
    };

    return result;
  } catch (error) {
    throw error;
  }
};


    let handleChange =(e)=>{
    setCity(e.target.value);
    }
     let  handleSubmit = async (e)=> {
        try{
   e.preventDefault();
    // console.log(city);
    setCity("");
    let res = await timeZone();
    updateInfo(res);
        } catch(error){
setError(true);
        }
 
  }
    return(
        <div className="primary">
            <form onSubmit={handleSubmit}>
                
                <TextField  placeholder='Enter City name' color="secondary" required value={city} onChange={handleChange} />
                <br/><br/>
                 <Button variant="contained" type='submit'>Search</Button>
          {error && <p style={{ color: "red" }}>NO SUCH COUNTRY EXIST </p>}
            </form>
          
        </div>
    )
};
