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

    const heroBadge = document.querySelector('.heroBadge');
    heroBadge?.classList.add('sectionAnimationDown');
    }, []);
    return(
        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className='col-md-6'>
                        <h1 className="heroBadge">HEY! I'M SEUN OGUNSANYA</h1>
                        <h2 className="heroWrite">
                            DATA ANALYST CONSULTANT 
                        </h2>
                        <br/>
                        <div className="heroBottom">
                        <p>
                            Transforming data into actionable insights for informed decision-making. With expertise in data analysis, visualization, and strategic consulting, I help businesses unlock the full potential of their data to drive growth and innovation.
                        </p>

                        <div className="row align-items-start">
                        <div className="col-md-3">
                            <FlatButton title="Get In Touch" className=" btn btnPrimary btn-lg"/>
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
                        
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                            <img className='hero-image' src={heroImage} alt="" />
                    </div>
                </div>
                
            </div>
        </section>
    )
}