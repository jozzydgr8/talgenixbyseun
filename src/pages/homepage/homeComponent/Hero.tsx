import { useEffect } from "react";
import { FlatButton } from "../../../shared/FlatButton";
import {

  RobotOutlined,
  TeamOutlined,

  LineChartOutlined,
  FacebookFilled, LinkedinFilled, InstagramFilled
} from "@ant-design/icons";
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
                <div className="text-center">
                    <h1 className="heroBadge">Transforming Data into </h1>
                    <h1 className="heroWrite">
                        Actionable Insights
                    </h1>
                    <br/>
                    <div className="heroBottom">
                        <p>
                             Transforming businesses through the strategic application of data analytics, business intelligence, artificial intelligence, and intelligent automation. We bridge the gap between technology and business outcomes, helping organizations gain deeper insights,
                              improve efficiency, and confidently navigate their digital transformation journey.
                        </p>

                        <FlatButton title="Get In Touch" className=" btn btnPrimary btn-xl"/>
                        <hr/>
                            <div className="hero-accolades">
                                <div>
                                    <h3 style={{color:'var(--burnished-gold)'}}>50+</h3>
                                    <small>Projects Delivered</small>
                                </div>
                                <div>
                                    <h3 style={{color:'var(--burnished-gold)'}}>30+</h3>
                                    <small>Happy Clients</small>
                                </div>
                                <div>
                                    <h3 style={{color:'var(--burnished-gold)'}}>10+</h3>
                                    <small>Awards Won</small>
                                </div>
                                <div>
                                    <h3 style={{color:'var(--burnished-gold)'}}>100%</h3>
                                    <small>Client Satisfaction</small>
                                </div>
                            </div>
                    </div>

                </div>
                
                
            </div>
        </section>
    )
}