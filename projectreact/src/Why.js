import React from "react";
import './Why.css';
import NewsletterSignup from "./NewsletterSignup";
import { Link, Outlet} from "react-router-dom";
import { Card } from 'react-bootstrap';

export default function Why() {
    return (
        <>
        <div style={{backgroundColor:'cadetblue'}} className="container zz">
            <div className="row">
                <div className="col-12">
                    <h1 className="pp">WHY ORGANIC ?</h1>
                </div>
            </div>
        </div>
        <div className="container gg">
            <div className="row">
                <div className="col-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.organicvoices.org/wp-content/uploads/2014/10/nutritiondownload-400x300.jpg" />
                        <Card.Body>
                            <Card.Title>Top 10 Reasons to Go Organic</Card.Title>
                            <Card.Text>
                                Organic is the most heavily regulated food system in the U.S. Only organic guarantees no toxic persistent pesticides, synthetic fertilizers or GMOs are used in production, and no antibiotics or growth hormones are given to livestock.
                            </Card.Text>
                            <Link variant="primary" to="why">Why ORGANIC</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.organicvoices.org/wp-content/uploads/2013/11/faq-400x300.jpg" />
                        <Card.Body>
                            <Card.Title>FAQs</Card.Title>
                            <Card.Text>
                                Learn more with our frequently asked questions and answers.. in ways that have passed nature’s own test for being A-OK. Organic farmers must work in sync with the environment.
                            </Card.Text>
                            <Link variant="primary" to="faq">Why ORGANIC</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.organicvoices.org/wp-content/uploads/2013/09/spray-400x300.jpg" />
                        <Card.Body>
                            <Card.Title>Big Food’s Dirty Little Secrets</Card.Title>
                            <Card.Text>
                                Health problems, including cancer, infertility, asthma, and birth defects, have been linked to pesticide exposure. Pregnant women, children and the elderly are especially susceptible to the impacts of toxic pesticides.
                            </Card.Text>
                            <Link variant="primary" to="secrete">Why ORGANIC</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.organicvoices.org/wp-content/uploads/2013/09/tomatoes_2-2-400x300.jpg" />
                        <Card.Body>
                            <Card.Title>The Organic Seal of Approval</Card.Title>
                            <Card.Text>
                                The USDA certified organic seal is the only guarantee that your food has been produced without toxic pesticides, chemical fertilizers, antibiotics, artificial hormones or genetic engineering.
                            </Card.Text>
                            <Link variant="primary" to="pestisides">Why ORGANIC</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

        <NewsletterSignup />
        <Outlet />
        </>
    );
}
