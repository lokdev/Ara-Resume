import React from "react";

class Recognitions extends React.Component {
  render() {
    return (
      <div classNameName="recognitions">
      <div className="card bg-light mb-3">
        <div className="card-header text-center"> 
        <h3 class="card-title text-uppercase">RECOGNITIONS</h3>
        </div>
          <div className="card-body">
            <div className="card-text">
      <div className="row">
            <div className="col-sm-3 text-right">
            <i class="fas fa-award fa-3x"></i><br /><br />
            <i class="fas fa-award fa-3x"></i><br /><br />
            <i class="fas fa-award fa-3x"></i>
      </div>
      <div class="col-sm-9">Business Ethics Certificate <br/>EL ECONOMISTA<br /><br />
      AdWords certificate  <br/>Google<br /><br />
      Consultant Achievement Award<br/>CinépolisGalerías</div>
      </div>
      </div>
      </div>
      </div>
      </div>
    
    );
  }
}

export default Recognitions;
