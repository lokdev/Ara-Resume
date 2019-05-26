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
            <h2 className="text-center text-light">PERSONAL CHARACTERISTICS</h2><br />
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
