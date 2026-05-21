import {PhoneOutlined,LinkedinOutlined,TwitterOutlined,GithubOutlined,
        MailOutlined,
        ClockCircleOutlined} from '@ant-design/icons';
export const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <h1>Seun Ogunsanya</h1>
                        <p>Transforming businesses through data analytics,
                            AI solutions, and process automation. Let's unlock your data potential together.
                        </p>
                        <div  style={{display:'flex', flexDirection:"row", gap:"10px"}}>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <LinkedinOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: '#0077B5', color:"white" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: '#0077B5', color:"white" }} />
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                <GithubOutlined style={{ padding:"10px", borderRadius:"12px", fontSize: '30px', background: '#0077B5', color:"white" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}