import { useEffect } from "react";
import { FlatButton } from "../../../shared/FlatButton";
import {FacebookFilled, LinkedinFilled, InstagramFilled} from '@ant-design/icons';
import heroImage from '../../../assets/corporateman.png'
export const Hero = ()=>{
    useEffect(() => {
    const headerText = document.querySelector('.heroWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerButton = document.querySelector('.heroBottom');
    headerButton?.classList.add('sectionAnimationUp');

    const headerImage = document.querySelector('.heroImage');
    headerImage?.classList.add('sectionAnimationUp');

    const heroBadge = document.querySelector('.heroBadge');
    heroBadge?.classList.add('sectionAnimationDown');
    }, []);
    return(
        <section id="hero">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className='col-md-6'>
                        <h1 className="heroBadge">Transforming Data into </h1>
                        <h3 className="heroWrite">
                            Actionable Insights
                        </h3>
                        <br/>
                        <div className="heroBottom">
                        <p>
                            Help businesses harness the power of data anlytics, business intelligence, data visualization, and AI to make informed decisions, automate processes
                            , and accelerate digital transformation..  
                        </p>

                        <div className="row align-items-center">
                        <div className="col-md-4">
                            <FlatButton title="Get In Touch" className=" btn btnPrimary btn-xl"/>
                        </div>
                        <div className="col-md-6">
                            <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <FacebookFilled style={{ fontSize: '40px', color: '#3b5998' }} />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <LinkedinFilled style={{ fontSize: '40px', color: '#0077B5' }} />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <InstagramFilled style={{ fontSize: '40px', color: '#dc3545' }} />
                                </a>
                            </div>
                            

                        </div>
                        <hr/>
                            <div style={{display:'flex', gap:"20px"}}>
                                <div>
                                    <h3>50+</h3>
                                    <small>Projects Delivered</small>
                                </div>
                                <div>
                                    <h3>30+</h3>
                                    <small>Happy Clients</small>
                                </div>
                                <div>
                                    <h3>10+</h3>
                                    <small>Awards Won</small>
                                </div>
                                <div>
                                    <h3>100%</h3>
                                    <small>Client Satisfaction</small>
                                </div>
                            </div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center heroImage">
                            <img className='hero-image' src={heroImage} alt="" />
                    </div>
                </div>
                
            </div>
        </section>
    )
}