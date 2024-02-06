import React from 'react';

const image = 'https://i.imgur.com/mV8PQxj.gif';

const About = () => {
    return (
        <div id="about">
            <h2>About Me</h2>
            <p>Any content you want here</p>
            <img src={image} alt="I made this" />
        </div>
    );
}

export default About;
