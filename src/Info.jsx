import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './Info.css'
export default function Info({info}){
    const SUNRISE="https://media.istockphoto.com/id/1205289672/photo/majestic-bright-sunrise-over-ocean.jpg?s=612x612&w=0&k=20&c=sG7YEXKCLRu0Rn5FpIEgbefuKkeNO1wuV634C9ZMyuU=";
  const SUNSET="https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740&q=80";
  const MIDDAY="https://media.istockphoto.com/id/649672792/photo/early-sunshine-in-a-cloudy-blue-sky.jpg?s=612x612&w=0&k=20&c=7jjTAOGBJ3tNVVneVdNFk2iE1ToB1siRyNwTbc8d-Nk=";
const HOUR  = new Date(info.time).getHours();
 return (
    <div className='totalbox'>
        <div className='box'>
    <Card sx={{ minWidth: 345 }} style={{ border: "1.5px solid black", borderRadius: "10px",boxShadow: "0 8px 24px rgba(0,0,0,0.2)"}}>
      <CardMedia
        sx={{ height: 145 }}
        image={HOUR> "15" ? SUNSET:HOUR>"9"? MIDDAY:SUNRISE}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.countryname } {
          HOUR> "15" ? <LightModeIcon/>:HOUR>"9"? <WbSunnyIcon/>:<SunnyIcon/>
}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          
        <p style={{color: "black"}}>Continent: {info. continent}</p>
         <p style={{color: "black"}}>Countrycode: {info.countrycode}</p>
         <p style={{color: "black"}}>Sunrise: {info.sunrise}</p>
         <p style={{color: "black"}}>Sunset: {info.sunset}</p>
         <p style={{color: "black"}}>Time: {info.time}</p>
         
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}