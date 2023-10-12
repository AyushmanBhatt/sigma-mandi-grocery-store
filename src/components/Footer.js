import React from 'react'
import '../css/Footer.css'
import { FaTwitter,FaInstagram,FaGithub,FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer>
                <section class="ft-main">
                    <div class="ft-main-item">
                        <h2 class="ft-title">About</h2>
                        <ul>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href=".">Customers</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </div>
                    <div class="ft-main-item">
                        <h2 class="ft-title">Resources</h2>
                        <ul>
                            <li><a href="/">Docs</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">eBooks</a></li>
                            <li><a href="/">Webinars</a></li>
                        </ul>
                    </div>
                    <div class="ft-main-item">
                        <h2 class="ft-title">Contact</h2>
                        <ul>
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Sales</a></li>
                            <li><a href="/">Advertise</a></li>
                        </ul>
                    </div>
                </section>
                <section class="ft-social">
                    <ul class="ft-social-list">
                        <li><a href="/"><FaFacebook /></a></li>
                        <li><a href="/"><FaInstagram /></a></li>
                        <li><a href="/"><FaTwitter /></a></li>
                        <li><a href="/"><FaGithub /></a></li>
                        <li><a href="/"><FaLinkedin /></a></li>
                        <li><a href="/"><FaYoutube /></a></li>
                    </ul>
                </section>
                <section class="ft-legal">
                    <ul class="ft-legal-list">
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li>&copy; 2023 Copyright Nowrap Inc.</li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}

export default Footer
