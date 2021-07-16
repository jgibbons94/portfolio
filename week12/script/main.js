/*(async () =>
{
    console.log("in anonymous function");
    const response = await fetch("/portfolio/data.json");
    console.log(response);
    if(! response.ok){
        console.debug("response not 200");
        return;
    }
    console.log("response ok.")
    const obj = await response.json();
    })()*/
import {fillScoreBoard, reportError} from "/portfolio/week12/script/scoreBoard.js";
fetch("/portfolio/data.json")
  .then(response=>{
    if (response.ok)
      return response.json()
    else
      throw new Error("fetch failed");
  })
  .then(fillScoreBoard)
  .catch(reportError)
