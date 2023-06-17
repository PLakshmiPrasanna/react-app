import React, { useState } from "react";

function Toggle() {
    const showData = true;
    const [showContent, setShowContent] = useState(showData);
    const toggleHandle = () => {
        setShowContent(!showContent);
    }

    return (
        <div>
            <button onClick= {toggleHandle}> { showContent ? 'hide' : 'show ' }  </button>
            { showContent   &&  <p>jjkdjfdkjdk</p>  }
        </div>
    );
}

export default Toggle;
