import React from 'react';

const name = "Liza";
const city = "New York";
const Home = () => {
    return (
        <div id="home">
            <h1 style={{ color: "firebrick" }}>{`${name} is a Web Developer from ${city}`}</h1>
        </div>
    );
}

export default Home;
