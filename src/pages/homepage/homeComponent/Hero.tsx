import { useEffect } from "react";
import { FlatButton } from "../../../shared/FlatButton";

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
                        insights that drive better decisions
                    </h1>
                    <br/>
                    <div className="heroBottom">
                        <p className="subtopic">
                             Ready to transform your business with data-driven decisions? Click below and unlock smarter growth, efficiency, and innovation.
                        </p>

                        <FlatButton title="Get Started Today!" className=" btn btnPrimary btn-xl"/>
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