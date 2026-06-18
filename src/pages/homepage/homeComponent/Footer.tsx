import {PhoneOutlined,LinkedinOutlined,TwitterOutlined,GithubOutlined,
        MailOutlined,
        ArrowRightOutlined,
        EnvironmentOutlined} from '@ant-design/icons';
import { FlatButton } from '../../../shared/FlatButton';
export const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Seun Ogunsanya</h3>
                        <br/>
                        <p>
                            Help businesses harness the power of data anlytics, business intelligence, data visualization, and AI to make informed decisions, automate processes
                            , and accelerate digital transformation..  
                
                        </p>
                        <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <LinkedinOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'rgba(184, 134, 11, 0.2)', color:"#E6C76A" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'rgba(184, 134, 11, 0.2)', color:"#E6C76A" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <GithubOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: 'rgba(184, 134, 11, 0.2)', color:"#E6C76A" }} />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h3>Quick Links </h3>
                        <br/>
                        <a href="/" target="_blank" rel="noopener noreferrer">Home</a>
                        <a href="/" target="_blank" rel="noopener noreferrer">About</a>
                        <a href="/#services" target="_blank" rel="noopener noreferrer">Services</a>
                        <a href="/#portfolio" target="_blank" rel="noopener noreferrer">portfolio</a>
                    </div>


                    
                    <div className="col-md-3">
                        <h3>Services</h3>
                        <br/>
                        <p>Data Analytics</p>
                        <p>AI Solutions</p>
                        <p>Process Automation</p>
                        <p>Corporate Training</p>
                    </div>


                    <div className="col-md-3">
                        <h3>Get In Touch</h3>
                        <br/>
                        <p><PhoneOutlined style={{fontSize:"20px", color:"#008080", paddingRight:"10px"}} />  +234 706 304 2461</p>
                        <p><MailOutlined style={{fontSize:"20px", color:"#008080", paddingRight:"10px"}} />  seunaiconulting@gmail.com</p>
                        <p><EnvironmentOutlined style={{fontSize:"20px", color:"#008080", paddingRight:"10px"}}/>  Africa / Remote worldwide</p>
                        <FlatButton title="Contact Us" className="btn btnSuccess btn-lg" icon={<ArrowRightOutlined/>}/>
                    </div>
                </div>
                <hr/>
                <p>Copyright © {new Date().getFullYear()} Seun Ogunsanya. All rights reserved.</p>
                <small>
                    <a href="https://jozzycodes.com" target="_blank" rel="noopener noreferrer" style={{ color: "#008080" }}>
                    Website created by jozzycodes
                </a>
                </small>
            </div>
        </footer>
    )
}