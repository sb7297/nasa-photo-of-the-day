import React from "react";

function NasaMedia(props) {
    const { url } = props;
    console.log(url);
    return <img src={url} />;
}

export default NasaMedia;