import React from "react";

export default class Social extends React.Component{
    render(){
        return(
            <div className="socialbutton" >
               <a href="https://www.linkedin.com/in/aracelicontis/">
                   <i class="fab fa-linkedin mr-2 fa-3x bg-light" data-toggle="tooltip" data-placement="top" title="Linkedin">
                    </i>
                </a>
                <a href="mailto:araceli.contis@gmail.com">
                    <i class="fa fa-envelope  fa-3x ml-2 bg-light" data-toggle="tooltip" data-placement="top" title="Send e-mail to Araceli">
                    </i>
                </a>
                <a href="ARACELI_RESUME.pdf" download>
                    <i class="fa fa-download fa-3x ml-2 bg-light" data-toggle="tooltip" data-placement="top" title="Download the Resume">
                    </i>
                </a>
            </div>
        );
    }
}