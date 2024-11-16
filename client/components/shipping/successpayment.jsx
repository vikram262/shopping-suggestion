// SuccessPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // If you want to include a link to another page

function SuccessPage() {
    return (
        <div className="success-page-container">
            <h2>Payment Successful!</h2>
            <p>Thank you for your order.</p>
            <p>Your order has been successfully processed.</p>
            {/* You can include a link to another page if needed */}
            <Link to="/home">Go Back to Home</Link>
        </div>
    );
}

export default SuccessPage;
