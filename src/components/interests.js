import React from "react";

class Interests extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-5 rounded-pill">
        <div class="card-body bg-secondary">
          <div className="natureOfWork">
          <font color="#cc0000">
            <h2 className="text-center">PERSONAL CHARACTERISTICS</h2></font><br />
            <ul style={{marginLeft:"15%"}}>
            {this.props.interests.map(interest =>{
              return <li>{interest}</li>;
            })}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
