import { getJSON, getLocation } from './utils.js';
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
const urlWithLocation = (latitude, longitude)=>`${baseUrl}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
getLocation().then(pos=>{
    const coords = pos.coords;
    return getJSON(urlWithLocation(coords.latitude, coords.longitude));
}).then(obj=>console.log(obj))