import React from "react";
import './Aboutpage.css';
import naina from './pigphotos/naina.jpeg';
import gnanam from './pigphotos/gnanam.jpeg';
import susai from './pigphotos/Susai.jpeg'
import Footerpage from "./Footerpage";
import Header from "./Header";




function Aboutpage() {
    return (

        <div>
            <Header />
            <div class="about-section">
                <h1 className="homepageabout">About Us Page</h1>
                <p>Welcome to Arockiya Farm, where our mission is to foster
                    sustainable agricultural practices and contribute to the local economy.
                </p>
                <p>Arockiya Farm is a proud asset of Nathan & Co, dedicated to
                    providing high-quality produce and supporting community growth.
                </p>
            </div>

            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
            <div class="row bottom-scroll">

                <div class="column">
                    <div class="card">
                        <img src={naina} />
                        <div class="container">
                            <h2>Sagaya Nathan.A</h2>
                            <p className="title">President</p>
                            <p>President and owner of Arockiya Farm,is dedicated to
                                driving the vision of excellence in sustainable agriculture.
                                His leadership is characterized by a commitment to innovation, operational efficiency.
                            </p>
                            <p>Email:parthi@gmail.com</p>
                            <p class="button">Contact 9500735511</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src={susai} style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Susai Nathan.S</h2>
                            <p className="title">CEO & Founder</p>
                            <p>As the CEO and Founder of Arockiya Farm,Susai
                                is dedicated to driving the growth and success of our
                                family business. With a passion for sustainable agriculture.
                                he is committed to enhancing our family's.</p>
                                <p>Email: susaimm26@gmail.com</p>
                                <p class="button">Contact 784544569</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src={gnanam} />
                        <div class="container">
                            <h2>GnanaSeela Nathan.S</h2>
                            <p className="title">Managing Director</p>
                            <p>As the Managing Director at Arockiya Farm,
                                I oversee operations to ensure efficiency and productivity.
                                My goal is to drive sustainable growth and innovation in our business practices.</p>
                            <p>Email: GnanaSeelan@gmail.com</p>
                            <p class="button">Contact 9843014828</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footerpage />
        </div>
    );
}
export default Aboutpage;