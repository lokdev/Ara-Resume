import React from "react";
import ReactDom from "react-dom";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.skillsvalue == undefined) {
      return <div />;
    }

    return (
      <div className="achievement">
        <div class="card bg-light mb-3">
          <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">SKILLS</h3>
          </div>
            <div class="card-body">
              <div class="card-text"></div>
        
        <ul>
          {this.props.skillsvalue.map(record => {
            return <li>{record}</li>;
          })}
        </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Skills;
