import { trainingFeatures } from "../../../shared/Data"
import {CheckOutlined} from '@ant-design/icons';
import trainImage from '../../../assets/corporateTrainingImage.jpg'

export const TrainingConsulting = ()=>{
    return(
        <section id="training">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">

                        <div >
                        
                            <span className='homeBadgeParent '> 
                                <span className='homeBadge'></span>
                                Training & Consulting
                            </span>
                        </div>
                        <br/>

                        <h2 className="homeHeader">
                            Elevate Your Team's Data Capabilities
                        </h2>
                        <p className='subtopic'>
                            Empower your organization with hands-on training programs and expert consulting services. 
                            From Power BI fundamentals to advanced AI implementation, 
                            I help teams build the skills they need to succeed in the data-driven world.
                        </p>

                        <div>
                            {trainingFeatures.map((feature, index) => (
                                <div className="animate-up"
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "14px",
                                    marginBottom: "24px"
                                }}
                                >
                                <div
                                    style={{
                                    minWidth: "52px",
                                    height: "52px",
                                    borderRadius: "12px",
                                    backgroundColor: "rgba(184, 134, 11, 0.2)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                    }}
                                >
                                    <CheckOutlined style={{ color: "#E6C76A", fontSize: "18px" }} />
                                </div>

                                <div>
                                    <h4 style={{ margin: 0, marginBottom: "6px" }}>
                                    {feature.title}
                                    </h4>

                                    <p
                                    style={{
                                        margin: 0,
                                        lineHeight: "1.6",
                                        color: "#94A3B8"
                                    }}
                                    >
                                    {feature.description}
                                    </p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="col-md-6 animate-up">
                        <div style={{backgroundImage: `url(${trainImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', borderRadius: '8px', minHeight:"300px"}}></div  >
                    </div>
                </div>
            </div>
        </section>
    )
}