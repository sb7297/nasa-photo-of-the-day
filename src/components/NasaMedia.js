import React from "react";

function NasaMedia(props) {
    const { url } = props;
    console.log(url);
    const style = {
        maxHeight: "84vh",
        maxWidth: "90%",
    };
    return <img src={url} style={style} />;
}

export default NasaMedia;