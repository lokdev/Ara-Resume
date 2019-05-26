import React from "react";
import ReactDOM from "react-dom";
import Objective from "./components/objective";
import ProfessionalExperience from "./components/professionalExperience";
import Experience from "./components/experience";
import Interests from "./components/interests";
import Skills from "./components/skills";
import Name from "./components/name";
import Address from "./components/address";
import Profilepic from "./components/profilepic";
import Social from "./components/social";
import Recognitions from "./components/recognitions";
import Language from "./components/Language";

import 'react-circular-progressbar/dist/styles.css';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import "font-awesome/css/font-awesome.css";
//import axios from "axios";
import json from "./data.json";

import "./styles.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: json
     // resume:{}
    };
  }

  /*
   componentWillMount() {
     axios
       .get(
       `https://raw.githubusercontent.com/lokdev/other-resume-content/master/resume1.json`
       )
       .then(res => {
               const resume = res.data;
         this.setState({ resume });
      });
   }*/

  render() {
    if (this.state.resume == undefined) {
      return <div className="container" />;
    }

    return (
      <div className="container">
        <div className="App">
          <div class="row">
            <div class="col-sm-4 bg-secondary text-white">
              <Profilepic />
              <Address
                address={this.state.resume.address}
                mobile={this.state.resume.mobile}
                email={this.state.resume.email}
              />

              <Interests interests={this.state.resume.interests} />
              <ProfessionalExperience
                company={this.state.resume.professionalexperience}
              />
            </div>
            <div class="col-sm-8 bg-white">
              <div className="right-panel">
                <Name
                  firstname={this.state.resume.firstname}
                  lastname={this.state.resume.lastname}
                />

                <Objective data={this.state.resume.objective} />
                <Experience
               exp1={this.state.resume.experience1}
                  exp1_1={this.state.resume.experience1_1}

                  exp2={this.state.resume.experience2}
                  exp2_1={this.state.resume.experience2_1}

                  exp3={this.state.resume.experience3}
                  exp3_1={this.state.resume.experience3_1}

                  exp4={this.state.resume.experience4}
                  exp4_1={this.state.resume.experience4_1}
                />
                <Skills skillsvalue={this.state.resume.skills}/>
                <Recognitions />
                <Language />
                 </div>
            </div>
                </div><br />
            <div className="text-center"><Social /></div><br />
          </div> 
</div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
