import { useEffect } from "react";
import { FlatButton } from "../../../shared/FlatButton";
import {FacebookFilled} from '@ant-design/icons';
export const Hero = ()=>{
    useEffect(() => {
    const headerText = document.querySelector('.headerWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerButton = document.querySelector('.headerButton');
    headerButton?.classList.add('sectionAnimationUp');

    const headerBadge = document.querySelector('.header-badge');
    headerBadge?.classList.add('sectionAnimationDown');
    }, []);
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-6'>
                        <h1 className="headerBadge">HAY! I'M SEUN OGUNSANYA</h1>
                        <h4 className="headerWrite">
                            DATA ANALYST CONSULTANT
                        </h4>
                        <p>
                            Transforming data into actionable insights for informed decision-making. With expertise in data analysis, visualization, and strategic consulting, I help businesses unlock the full potential of their data to drive growth and innovation.
                        </p>

                        <div>
                        <FlatButton title="Get In Touch" className=" btn btnPrimary btn-lg"/>
                        <div>
                            <a href="https://www.facebook.com/seun.ogunsanya.5" target="_blank" rel="noopener noreferrer">
                                <FacebookFilled style={{ fontSize: '24px', color: '#3b5998' }} />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
                
            </div>
        </section>
    )
}