import React,{useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name,hobby,eyeColor}) {
  
 const eyeColorPicture = {
  blue:BlueBaby,
  sun:SunBaby,
  glowing:GlowingBaby,

 };
  

  const [weight,setWeight]=useState(10)
  
  

  console.log(eyeColor)

  function handleChangeWeight(e) {
    
    (e.target.name==="+") ? setWeight(weight +10 ) : setWeight(weight -5 )
      
  
   
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }
  
  //For an added bonus, use the weight of the BabyHog to dynamically change the height of the image

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{weight} lbs</h3>
      <h3>{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button  onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img src={eyeColorPicture[eyeColor]} style={{ height: `${weight*5}px` }} alt="MasterBlasterJrJr"/>
      </div>
    </li>
  );
}

export default BabyHog;

