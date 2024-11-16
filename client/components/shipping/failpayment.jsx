// FailPage.js

import React from 'react';
import { Link } from 'react-router-dom';

function FailPage() {
    return (
        <div className="fail-page-container">
            <h2>Payment Failed!</h2>
            <p>Oops! Something went wrong with your payment.</p>
            <p>Please try again or contact customer support.</p>
            <Link to="/home">Go Back to Home</Link>
        </div>
    );
}

export default FailPage;
