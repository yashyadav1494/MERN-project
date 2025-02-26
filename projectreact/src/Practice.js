import React from "react";
import './Practice.css';
import { Link, Outlet} from "react-router-dom";
import { Card } from 'react-bootstrap';

export default function Practice() {
    return (
        <>
        <div style={{backgroundColor:'cadetblue'}} className="container zz">
            <div className="row">
                <div className="col-12">
                    <h1 className="pp">ORGANIC PRACTICES ?</h1>
                </div>
            </div>
        </div>
        <div className="container gg">
            <div className="row">
                <div className="col-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.organicvoices.org/wp-content/uploads/2014/04/sheep_download-400x300.jpg" />
                        <Card.Body>
                            <Card.Title>Organic Livestock Requirements</Card.Title>
                            <Card.Text>
                                Organic farmers and ranchers must accommodate the natural behavior of their livestock and meet health and wellness requirements.
                            </Card.Text>
                            <Link variant="primary" to="prac">ORGANIC PRACTICES</Link>
                        </Card.Body>
                    </Card>
                </div>  
                <div className="col-6">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.organicvoices.org/wp-content/uploads/2014/04/strawberries_download-400x300.jpg" />
                        <Card.Body>
                            <Card.Title>Organic Farming Practices</Card.Title>
                            <Card.Text>
                                Organic farmers grow and process foods by following guidelines established by the U.S. Department of Agriculture to ensure sustainable practices and animal welfare.
                            </Card.Text>
                            <Link variant="primary" to="farm">ORGANIC PRACTICES</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>  
        </div>  

        <Outlet />      
        </>
    );
}
