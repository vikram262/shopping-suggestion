import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className="container7">
                <div className="c7small">
                    <div className="cna">
                        <div className="c7a">signup for newsletter</div>
                        <div className="c7b">get email updates about our latest shops and special offers</div>
                    </div>
                    <div className="cnb">
                        <input type="text" className="c7text" placeholder="Your email address" />
                        <button className="c7button">Sign Up</button>
                    </div>
                </div>
            </div>
            <footer className="container8">
                <div className="c8small">
                    <div className="c8part1">
                        <div className="c8part1a">Contact</div>
                        <div className="c8part1b">Address: 562 Wellington Road, Street 32, San Francisco</div>
                        <div className="c8part1c">Phone: +01222365 / (91) 0123432</div>
                        <div className="c8part1d">Hours: 10:00-18:00, Mon-Sat</div>
                        <div className="c8part1e">Follow Us</div>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaYoutube /></a>
                        </div>
                    </div>
                    <div className="c8part2">
                        <div className="c8part2a">About</div>
                        <div className="c8part2small">
                            <div className="c8part2b">About Us</div>
                            <div className="c8part2c">Delivery Information</div>
                            <div className="c8part2d">Privacy & Policy</div>
                            <div className="c8part2e">Terms & Condition</div>
                            <div className="c8part2f">Contact Us</div>
                        </div>
                    </div>
                    <div className="c8part3">
                        <div className="c8part3a">My Account</div>
                        <div className="c8part3small">
                            <div className="c8part3b">Sign In</div>
                            <div className="c8part3c">View Cart</div>
                            <div className="c8part3d">My Wishlist</div>
                            <div className="c8part3e">Track My Order</div>
                            <div className="c8part3f">Help</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
