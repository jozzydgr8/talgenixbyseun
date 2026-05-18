import { businessDetails } from "../../../shared/Data"
import {PhoneOutlined,LinkedinOutlined,TwitterOutlined,GithubOutlined,
        MailOutlined,
        ClockCircleOutlined} from '@ant-design/icons';

const Styles = {
    detailsContainer:{
        backgroundColor:"white",
        color:'black',
        padding:'20px',
        borderRadius:'12px',
        margin:"10px 0",
         display:'flex',
         alignItems:'center',
         gap:'12px'
    },
    iconContainer:{
        minWidth: "52px",
        height: "52px",
        borderRadius: "12px",
        color: "#005bb5",
        background: "rgba(152, 222, 245, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px"
    }
}
export const Transform = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div style={{textAlign:'center'}}>
                    <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                        Get in Touch
                    </span>
                </div>
                <br/>

                <h2 className="homeHeader">
                    Let's Transform Your Data Journey
                </h2>
                <p className="subtopic">Ready to unlock the power of your data? Schedule a free consultation to discuss how I can help your organization achieve its goals.</p>
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                            <div style={{display:'flex', flexDirection:'column', gap:'15px'}}>
                                <div>
                                    {businessDetails.map((detail, index) => (
                                        <div key={index}>

                                           <div style={Styles.detailsContainer}>
                                            <div style={Styles.iconContainer}>
                                             <MailOutlined /> 
                                             </div>
                                             <div>
                                                <h4>Email: </h4> <p>{detail.email}</p>
                                            </div>
                                            </div>

                                            <div style={Styles.detailsContainer}>
                                                <div
                                                    style={Styles.iconContainer}
                                                >
                                                    <PhoneOutlined /> 
                                                </div> 
                                                
                                                <div>
                                                    <h4>Phone: </h4> <p>{detail.phone}</p>
                                                </div>
                                            </div>
                
                                            
                                            <div style={Styles.detailsContainer}>
                                                <div style={Styles.iconContainer}>
                                                    <ClockCircleOutlined />
                                                </div>
                                                
                                                 <div>
                                                    <h4>Business Hours: </h4> <p>{detail.business_hours.days} {detail.business_hours.hours}</p>
                                                 </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <div style={{backgroundColor:"#005bb5", padding:"30px", borderRadius:"12px"}}>
                                    <h4>Connect with me</h4>
                                    <p>Follow my work and stay updated on the latest in data analytics and AI.</p>
                                    <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <LinkedinOutlined style={{ fontSize: '20px', background: '#3b5998', color:"white" }} />
                                        </a>
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <TwitterOutlined style={{ fontSize: '20px', background: '#0077B5', color:"white" }} />
                                        </a>
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <GithubOutlined style={{ fontSize: '20px', color: '#dc3545' }} />
                                        </a>
                                </div>
                                </div>            

                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}