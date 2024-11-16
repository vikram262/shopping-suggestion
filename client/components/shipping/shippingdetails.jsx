import React, { useState } from 'react';
import Confirmorder from './confirmorder';
import { useNavigate } from 'react-router-dom';

function ShippingDetail() {
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({
        fullname: '',
        address: '',
        city: '',
        postaladdress: '',
        country: '',
    });

    const [errors, setErrors] = useState({
        fullname: '',
        address: '',
        city: '',
        postaladdress: '',
        country: '',
    });

    function handleOnChange(e, name) {
        const value = e.target.value;
        setformdata(prev => ({ ...prev, [name]: value }));
        // Reset error message for the field on change
        setErrors(prev => ({ ...prev, [name]: '' }));
    }

    function handleOnClick() {
        const newErrors = {};
        let isValid = true;

        // Check for empty fields
        Object.entries(formdata).forEach(([key, value]) => {
            if (value.trim() === '') {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
                isValid = false;
            }
        });

        if (isValid) {
            navigate('/confirmorder');
            localStorage.setItem("confirmorder", JSON.stringify(formdata));
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <div className="shipping-form-container">
            <h2>Shipping Details</h2>
            <div className="shipping-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" id="fullName"
                        value={formdata.fullname} onChange={(e) => handleOnChange(e, "fullname")}
                        required />
                    {errors.fullname && <p className="error-message">{errors.fullname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"
                        value={formdata.address} onChange={(e) => handleOnChange(e, "address")}
                        required />
                    {errors.address && <p className="error-message">{errors.address}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city"
                        value={formdata.city} onChange={(e) => handleOnChange(e, "city")}
                        required />
                    {errors.city && <p className="error-message">{errors.city}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text" name="postalCode" id="postalCode"
                        value={formdata.postaladdress} onChange={(e) => handleOnChange(e, "postaladdress")}
                        required />
                    {errors.postaladdress && <p className="error-message">{errors.postaladdress}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country"
                        value={formdata.country} onChange={(e) => handleOnChange(e, "country")}
                        required />
                    {errors.country && <p className="error-message">{errors.country}</p>}
                </div>
                <button type="submit" className="submit-button" onClick={handleOnClick}>Submit</button>
            </div>
        </div>
    );
}

export default ShippingDetail;
