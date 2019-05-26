import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Name text-center mb-5 mt-5">
        <h1 className="display-4">
          <font color="#3399ff">
           
              {this.props.firstname} {this.props.lastname}
            
          </font>
        </h1>
      </div>
    );
  }
}

export default Name;
