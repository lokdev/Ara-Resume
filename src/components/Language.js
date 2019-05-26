import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

class Language extends React.Component {
  render() {
    const percentage1 = 100;
    const percentage2 = 75;
    const percentage3 = 25;
    return (
      <div className="language">
      <div class="card bg-light mb-3">
        <div class="card-header text-center"> 
        <h3 class="card-title text-uppercase">LANGUAGE SKILLS</h3>
        </div>
          <div class="card-body">
            <div class="card-text"></div>
      
   <div className="progress fa-3x" style={{height: "14rem",padding: "5%"}}>
     
 
<CircularProgressbar value={percentage1} text={"SPANISH"} />
<CircularProgressbar value={percentage2} text={"ENGLISH"} />
<CircularProgressbar value={percentage3} text={"FRENCH"} />
</div>
      </div>
      </div>
    </div>
    );
  }
}

export default Language;
