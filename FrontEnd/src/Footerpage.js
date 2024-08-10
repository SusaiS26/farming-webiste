import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footerpage() {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content">
                        <div className="d-md-flex justify-content-between">
                            <div className="social-network mb-2 mb-md-0">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            <div className="social-network-icon">
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-flud">
                <div className="background">

                    <div className="container">
                        <div className="row">
                            <div className=" col-md-12 col-sm-12 col-lg-3 col-xs-12 mx-auto mb-4 mt-3 productdetails">
                                <h6>Arockiya Farms</h6>
                                <hr className="line" />
                                <p>
                                    At Arockiya Farms, we specialize in sustainable pig,
                                    chicken, and fish farming. Our commitment to ethical farming practices ensures
                                    that our livestock and fish are raised in a healthy and natural environment.
                                </p>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-3 col-xs-12 mx-auto mb-4 mt-3 productdetails">
                                <h6>Products</h6>
                                <hr className="line" />
                                <p><a href="#!" className="text-decoration">Pig</a></p>
                                <p><a href="#!" className="text-decoration" >Chicken</a></p>
                                <p><a href="#!" className="text-decoration">Fish</a></p>
                                <p><a href="#!" className="text-decoration">All Organic Vegetable</a></p>

                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-3  mx-auto mb-4 productdetails">
                                <h6>Useful links</h6>
                                <hr className="line" />
                                <p><a href="#!" className="text-decoration">Your Account</a></p>
                                <p><a href="#!" className="text-decoration" >Privacy Policy</a></p>
                                <p><a href="#!" className="text-decoration">Shipping Rates</a></p>
                                <p><a href="#!" className="text-decoration">Help</a></p>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-3 col-xs-12 mb-4 productdetails ">
                                <h6>Contact</h6>
                                <hr className="line" />
                                <p><i className="fas fa-home mr-3"></i> 1/100,Madha Kovil St,Kommedu,Viluppuram</p>
                                <p><i className="fas fa-envelope mr-3"></i> susaimm26@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> 7845449569 and 9843014828</p>
                            </div>
                        </div>
                    </div>
                    <div className="footercolor">
                        <span className="copy-right">© 2024 Copyright: Arockiya Farms</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footerpage;