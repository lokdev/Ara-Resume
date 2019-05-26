import React from "react";

export default class Social extends React.Component{
    render(){
        return(
            <div className="socialbutton" >
               <a href="https://www.linkedin.com/in/lokdev/">
                   <i class="fa fa-linkedin mr-2 fa-3x " data-toggle="tooltip" data-placement="top" title="Linkedin">
                    </i>
                </a>
                <a href="https://www.facebook.com/lokdev">
                    <i class="fa fa-facebook fa-3x" data-toggle="tooltip" data-placement="top" title="Facebook">
                    </i>
                </a>
                <a href="https://twitter.com/lokdev">
                    <i class="fa fa-twitter ml-2 fa-3x" data-toggle="tooltip" data-placement="top" title="Twitter">
                    </i>
                </a>
                <a href="mailto:dlokesh@outlook.com">
                    <i class="fa fa-envelope  fa-3x ml-2" data-toggle="tooltip" data-placement="top" title="Mail to Lokesh">
                    </i>
                </a>
                <a href="./src/components/Lokesh_Resume.pdf" download>
                    <i class="fa fa-download fa-3x ml-2" data-toggle="tooltip" data-placement="top" title="Download the Resume">
                    </i>
                </a>
            </div>
        );
    }
}