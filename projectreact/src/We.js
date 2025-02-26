import React from "react";
import './Why.css';
import './We.css';
import { Link, Outlet } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Pioneer from "./Pioneer";
import Farmer from "./Farmer";
import FarmerMain from "./FarmerMain";
import Quiz from "./Quiz";
import Marketplace from "./Marketplace";

export default function We() {
    return (
        <>
        <div style={{backgroundColor:'cadetblue'}} className="container zz">
            <div className="row">
                <div className="col-12">
                    <h1 className="pp">ABOUT ORGANIC VOICES ?</h1>
                </div>
            </div>
        </div>
        <div className="container gary">
            <h2 className="h">WHO WE ARE ?</h2>
            <h4 className="z">At Organic Voices, we believe in trust.</h4>
            <p className="para">
                Of course, trust must be earned. Thanks to tough federal organic standards, organic farmers and food companies have nothing to hide. It’s the positive notion of knowing exactly what you’re getting. We are a group of folks devoted to telling the story of organic agriculture and food production with the hope of instilling the peace of mind that going organic gives. Our aim is to cultivate a better understanding of what being organic really means and the environmental and health benefits choosing organic provides. We’re pretty passionate about it and hope you will be too!
            </p>
        </div>

        <div className="container" style={{height:'1000px',backgroundColor:'lightblue'}}>
            <h3 style={{textAlign:'start'}}><b>Supporters :-</b></h3><br/>
            <div className='row'>
                {/* Cards for supporters */}
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5odN3IZCwYgFV5zXexLW8pEfcd_sJzbhcZg&s" alt="Supporter 1"/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img style={{height:'270px'}} src="https://www.raghuvanshagro.com/images/logo-square.jpg" alt="Supporter 2"/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img style={{height:'270px'}} src="https://inspireagrofarms.com/wp-content/uploads/2021/08/company-intro-image-2.png" alt="Supporter 3"/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIlmGrIAdxG_YXesDUwcHnS7lYzWrlozeNw&s" alt="Supporter 4"/>
                    </div>
                </div>
            </div>
            <br/>

            {/* Additional rows of supporters */}
            <div className='row'>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img style={{height:'270px'}} src="https://gtpimg.s3.us-west-2.amazonaws.com/uploads/2024/12/29/115962/1735425736.png" alt="Supporter 5"/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img style={{height:'270px'}} src="https://res.cloudinary.com/ekport/image/upload/v1685445851/EventBanners/j3yefge9szs13lhionca.png" alt="Supporter 6"/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img style={{height:'270px'}} src="https://ruiaagrofarms.com/wp-content/uploads/2022/08/cropped-Raf_Logo.-1024x1024-1.png" alt="Supporter 7"/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{border:'none'}} className='card'>
                        <img style={{height:'270px'}} src="https://satguna.in/images/logo.png" alt="Supporter 8"/>
                    </div>
                </div>
            </div>
            <br/>

            {/* More supporter rows */}
            <div className='row'>
                {/* Cards continue */}
            </div>
        </div>

        {/* Other Components */}
        <Pioneer />
        <Farmer />
        <FarmerMain />
        <Quiz />
        <Marketplace />
        </>
    );
}
