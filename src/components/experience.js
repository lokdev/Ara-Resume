import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.exp1 == undefined) {
      return <div />;
    }

    return (
      <div className="roles-responsibility">
        <div class="card bg-light mb-3">
        <div class="card-header text-center"> 
          <h3 class="card-title text-uppercase">PROJECT EXPERIENCE</h3>
          </div><br />  
         
        <div class="card  mb-3">
          <div class="card-header text-center bg-info"> 
          <h8 class="card-title text-uppercase">{this.props.exp1}</h8>
          </div>
            <div class="card-body">
              <div class="card-text">
             <ul>
          {this.props.exp1_1.map(expe1 => {
            return <li>{expe1}</li>;
          })}
          
        </ul>
        </div>
        </div>
        </div>

        <br />  
         
         <div class="card  mb-3">
           <div class="card-header text-center bg-info"> 
           <h8 class="card-title text-uppercase">{this.props.exp2}</h8>
           </div>
             <div class="card-body">
               <div class="card-text">
              <ul>
           {this.props.exp2_1.map(expe2 => {
             return <li>{expe2}</li>;
           })}
           
         </ul>
      
         </div>
         </div>

        </div>
        <br />  
         
         <div class="card  mb-3">
           <div class="card-header text-center bg-info"> 
           <h8 class="card-title text-uppercase">{this.props.exp3}</h8>
           </div>
             <div class="card-body">
               <div class="card-text">
              <ul>
           {this.props.exp3_1.map(expe3 => {
             return <li>{expe3}</li>;
           })}
           
         </ul>
         </div>
         </div>
         </div>
 
         <br />  
         
         <div class="card  mb-3">
           <div class="card-header text-center bg-info"> 
           <h8 class="card-title text-uppercase">{this.props.exp4}</h8>
           </div>
             <div class="card-body">
               <div class="card-text">
              <ul>
           {this.props.exp4_1.map(expe4 => {
             return <li>{expe4}</li>;
           })}
           
         </ul>
         </div>
         </div>
         </div>
 
         <br />  


        </div>
        </div>
            );
  }
}

export default Experience;
