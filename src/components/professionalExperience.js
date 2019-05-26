import React from "react";

class ProfessionalExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card mb-5 rounded-pill">
        <div className="card-body bg-secondary">
          <div className="professional-experience">
            <h2 className="text-center text-light">EXPERIENCE</h2><br />
            <div className="display-3 text-center">+5 Years</div><br />
            <ul style={{marginLeft:"21%"}}>
            {this.props.company.map(workexp =>{
              return <li>{workexp}</li>;
            })}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalExperience;
