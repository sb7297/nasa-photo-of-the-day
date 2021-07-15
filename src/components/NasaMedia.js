import React from "react";
import styled from "styled-components";

const NasaImg = styled.img`
    max-height: 84vh;
    max-width: 90%;
`;

const NasaIframe = styled.iframe`
    height: 84vh;
    width: 80%;
`;

function NasaMedia(props) {
    const { url, type } = props;
    if (type === "image") return <NasaImg src={url} alt="nasa astronomy photo of the day" />;
    return <NasaIframe src={url} title="nasa astronomy photo of the day" />;
}

export default NasaMedia;