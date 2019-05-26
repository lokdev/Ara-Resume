import React from "react";
import ReactDom from "react-dom";

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card mb-5 rounded-pill">
        <div class="card-body bg-secondary text-center">
          <div className="Address">
          <font color="#cc0000">
            <h2 className="text-uppercase">Contact</h2></font>
            <address>
              {this.props.address}
              <br />
              Mobile : {this.props.mobile}<br />
              <span> E-Mail : {this.props.email}</span>
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
