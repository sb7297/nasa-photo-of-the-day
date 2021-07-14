import React from "react";

function NasaMedia(props) {
    const { url, type } = props;
    const imgStyle = {
        maxHeight: "84vh",
        maxWidth: "90%",
    };
    const iframeStyle = {
        width: "80%",
        height: "84vh"
    };
    if (type === "image") return <img src={url} style={imgStyle} />;
    return <iframe src={url} style={iframeStyle}></iframe>;
}

export default NasaMedia;