import { businessDetails } from "../../../shared/Data"
import {PhoneOutlined,LinkedinOutlined,TwitterOutlined,GithubOutlined,
        MailOutlined,
        ClockCircleOutlined} from '@ant-design/icons';
import { NewsLetterForm } from "./NewsLetterForm";

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
        color: "#7FFFD4",
        background: "rgba(0, 40, 40, 0.88)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px"
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
                <p className="subtopic">

                    Unlock the power of your data. 
                    Subscribe to our newsletter for tips and insights to help your organization succeed.
                     
                </p>
                
                <div className="row">
                    <div className="col-md-6 animate-up">
                        <NewsLetterForm/>
                    </div>
                    <div className="col-md-6 animate-up">
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


                                <div style={{backgroundColor:"#006666", padding:"30px", borderRadius:"12px", color:"#fffaf0"}} className='animate-up'>
                                    <h4 style={{color:"white"}}>Connect with me</h4>
                                    <p>Follow my work and stay updated on the latest in data analytics and AI.</p>
                                    <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <LinkedinOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: '#008080', color:"white" }} />
                                        </a>
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <TwitterOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: '#008080', color:"white" }} />
                                        </a>
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <GithubOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: '#008080', color:"white" }} />
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