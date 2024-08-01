import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import './Signup.css';
import Button from 'react-bootstrap/Button';
import logo from './pigphotos/piglog1.jpeg'

function Signup() {

    const navigate = useNavigate();


    return (
        <>
            <Header></Header>
            <section className="p-4 text-center w-100 head-sec login-header">
                <div className="card rounded-3 hederstyle">
                    <div className="row ">
                        <div className="col-12 col-md-6 mb-5">
                            <img src={logo} className="logo-sing" alt="logo"></img>
                            <p className="fw-bold fs-4"> We Are The Team</p>

                            <div class="signup-container">
                                <h1>Sign Up</h1>
                                <p>Please fill in this form to create an account.</p>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="username"><b>Username :-</b></label>
                                        <input type="text" placeholder="Enter Username" id="username" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><b>Email :-</b></label>
                                        <input type="email" className="email-val" placeholder="Enter Email" id="email" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="password"><b>Password :-</b></label>
                                        <input type="password" placeholder="Enter Password" id="password" required />
                                    </div>
                                </div>
                                <Button variant="success" className="save-css">Save</Button>
                            </div>


                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center text-background  ">
                            <div>
                                <h4> we are more than just a compnay</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div>

                </div>

            </section>
        </>


    );
} export default Signup;