import { businessDetails } from "../../../shared/Data"

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
                                            <h4>Email: </h4> <p>{detail.email}</p>
                                            <h4>Phone: </h4> <p>{detail.phone}</p>
                                            <h4>Business Hours: </h4> <p>{detail.business_hours.days} {detail.business_hours.hours}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}