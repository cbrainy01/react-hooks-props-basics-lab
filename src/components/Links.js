import React from "react";

function Links(props) {
    return(
        <div id="link">
        <h3>Links</h3>
        <a href={props.hubLink}>{props.hubLink}</a>
        <a href={props.denLink}>{props.denLink}</a>
        </div>
    );
}

export default Links;