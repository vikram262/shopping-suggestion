import { Link } from "react-router-dom";
import c1 from "../src/images/contact.jpg"
function Contact() {
    return <>
        <div className="contact-container">
            <section id="contact-form">
                <div class="contact-top" style={{ backgroundImage: `URL(${c1})` }}>
                </div>
                <form class="contact-main-form">
                    <h2>Contact Form</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>
            <div class="main-sec">
                <section id="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1-123-456-7890</p>
                    <p>Address: 123 Main Street, City, Country</p>

                    <h2>Business Hours</h2>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM (local time)</p>
                    <p>Saturday - Sunday: Closed</p>
                </section>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.269784054907!2d73.87251157465414!3d18.606931466531677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1709038868309!5m2!1sen!2sin"
                        width="640"
                        height="353"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

            </div>
        </div>
        <footer>
            <p>Connect With Us:</p>
            <ul>
                <li><Link to="#">Facebook</Link></li>
                <li><Link to="#">Twitter</Link></li>
                <li><Link to="#">Instagram</Link></li>
            </ul>
            <p>Privacy Policy: <Link to="#">Privacy Policy Link</Link></p>
        </footer>
        );
    </>
}

export default Contact;
