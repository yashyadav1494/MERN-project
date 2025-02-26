import React from "react";
import { Link, Outlet } from "react-router-dom";
import img1 from './img/yash.jfif';
import img2 from './img/suraj.jfif';

export default function About() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'white', paddingTop: '50px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '70px', color: '#ff7043', fontWeight: 'bold' }}>
                    <b>Evergreen Farms</b>
                </h1>
                <div className="text-center mb-4">
                    <img 
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98d25f55899921.5997acd85feb8.jpg" 
                        alt="GoFood" 
                        style={{ width: '50%', borderRadius: '20px'}}
                    />
                </div>
                <h2 style={{ textAlign: 'center', fontSize: '50px', color: '#66bb6a', fontWeight: 'bold' }}>
                    The Organic Food Revolution
                </h2>
            </div>

            {/* Section 1: Founder Info */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img 
                            src={img1} 
                            alt="Yash Arvind Yadav" 
                            className="img-fluid rounded-circle mb-4" 
                            style={{ width: '80%'}}
                        />
                    </div>
                    <div className="col-md-6">
                        <h3><b><em>Yash Arvind Yadav</em></b></h3>
                        <h4><b>CEO & Founder of Evergreen Farms</b></h4>
                        <h5 className="text-center text-primary">Message from the CEO</h5>
                        <p className="text-justify" style={{ backgroundColor: '#e1f5fe', padding: '15px', borderRadius: '10px' }}>
                            <i>
                                We are committed to providing the highest quality organic food to help our customers live healthy and sustainable lives. We believe in creating a positive impact through food and strive to make the world a healthier place, one meal at a time.
                            </i>
                        </p>
                        <h5 className="text-center mt-4"><b><i>Yours Faithfully, <br /> [Yash Yadav]</i></b></h5>
                    </div>
                </div>
            </div>

            {/* Section 2: CFO Info */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2">
                        <img 
                            src={img2} 
                            alt="Suraj Sudhakar Yadav" 
                            className="img-fluid rounded-circle mb-4" 
                            style={{ width: '80%' }}
                        />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h3><b><em>Suraj Sudhakar Yadav</em></b></h3>
                        <h4><b>CFO & Co-Founder of Evergreen Farms</b></h4>
                        <h5 className="text-center text-primary">Financial Strategy Insight</h5>
                        <p className="text-justify" style={{ backgroundColor: '#e8f5e9', padding: '15px', borderRadius: '10px' }}>
                            <i>
                                "Setting the right prices for profitability is key to success. Our pricing strategies ensure long-term growth while maintaining sustainability. Pricing with the right approach guarantees business success and financial stability."
                            </i>
                        </p>
                        <h5 className="text-center mt-4"><b><i>Yours Faithfully, <br /> [Suraj Yadav]</i></b></h5>
                    </div>
                </div>
            </div>

            {/* Section 3: Food Product Research Team */}
            <div className="container-fluid mt-5" style={{ backgroundColor: '#ffffff' }}>
                <h3 className="text-center text-primary mb-4"><b><i>Food Product Research Team</i></b></h3>
                <p className="text-center" style={{ backgroundColor: '#c8e6c9', padding: '20px', borderRadius: '10px' }}>
                    <i>
                        As part of our commitment to providing the healthiest organic options, our research team works diligently to ensure the quality of every product. The demand for organic food is rising, and we are proud to contribute to this growing industry by creating products that nourish the body and respect the planet.
                    </i>
                </p>
                <div className="row text-center mt-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <img 
                            src="https://cdn.prod.website-files.com/661f56b3f7ac96857e9ff9e7/667ea30c7835d2d28af2e1e9_AD_4nXfClwUKSV5oUGzV6Yb93cwRPzwwRSOTUttxzVM4GU1dV1FkqrYU8PjaZT5JKJmS78Qikd4A5ggFUykwLH-aGsOnHI1P09foOxQfZCn1zP4d_uYtBpLYILx_pUpHcqlNzaDZeal69rxdy0W_EwDL5e_SJQ.png" 
                            alt="Organic Food Features" 
                            className="img-fluid rounded" 
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <img 
                            src="https://selfup.com/cdn/shop/articles/1W1A5956_3720x.jpg?v=1650025527" 
                            alt="Organic Farming" 
                            className="img-fluid rounded" 
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <img 
                            src="https://cdn.prod.website-files.com/5de2db6d3719a1e2f3e4454c/6697d0910be5657bab251691_1*OEjXGJeoI-9GJjQkgn59qg.png" 
                            alt="Healthy Produce" 
                            className="img-fluid rounded" 
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <img 
                            src="https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/1672285305229-LAJ14339KBKOUYBGD6N6/Dusit.png" 
                            alt="Sustainable Farming" 
                            className="img-fluid rounded" 
                        />
                    </div>
                </div>
            </div>

            {/* Section 4: Clients Showcase */}
            <div className="container mt-5">
                <h3 className="text-center text-warning mb-4"><b><i>Our Esteemed Clients</i></b></h3>
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <img 
                            src="https://media.licdn.com/dms/image/v2/C4D0BAQG-ZHhFJJ7U9A/company-logo_200_200/company-logo_200_200/0/1630534271780/overseas_food_trading_ltd_logo?e=2147483647&v=beta&t=LVVFZ8XHx6ueHQoGMTpNO4EAiEq9bO-0lFwjrr0L9y0" 
                            alt="Client 1" 
                            className="img-fluid rounded shadow" 
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <img 
                            src="https://www.shutterstock.com/image-vector/world-food-logo-template-design-260nw-1547881652.jpg" 
                            alt="Client 2" 
                            className="img-fluid rounded shadow" 
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <img 
                            src="https://img.freepik.com/premium-vector/100-organic-food-certified-label_236275-42.jpg" 
                            alt="Client 3" 
                            className="img-fluid rounded shadow" 
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <img 
                            src="https://catalog.wlimg.com/1/3058482/other-images/714031.jpg" 
                            alt="Client 4" 
                            className="img-fluid rounded shadow" 
                        />
                    </div>
                </div>
            </div>

            {/* Explore More Button */}
            <div className="container text-center mb-5">
                <Link to="explore">
                    <button 
                        className="btn btn-primary btn-lg px-4 py-2"
                        style={{ fontWeight: 'bold', borderRadius: '8px', marginRight: '10px' }}
                    >
                        Explore More
                    </button>
                </Link>
                <Link to="review">
                    <button 
                        className="btn btn-success btn-lg px-4 py-2"
                        style={{ fontWeight: 'bold', borderRadius: '8px' }}
                    >
                        Client Reviews
                    </button>
                </Link>
            </div>

            <Outlet />
        </>
    );
}
