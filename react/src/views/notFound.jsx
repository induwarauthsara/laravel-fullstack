// import React from "react";

// Link notFound.css
import "./notFound.css";

import { Link } from "react-router-dom"; // If you're using React Router

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Not Found</h1>
            <p>
                Sorry, the page you are looking for might be in another castle!
            </p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};

export default NotFound;
