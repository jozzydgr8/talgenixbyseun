import {servicesData} from '../../../shared/Data'
import { FlatButton } from '../../../shared/FlatButton'
import {RightOutlined} from '@ant-design/icons'
import { Badge } from 'antd';
export const Services = ()=>{
    return(
        <section id='services'>
            <div className="container-fluid">
                <div style={{textAlign:'center'}}>
                    
                    
                    
                   <span className='homeBadgeParent '> 
                    <span className='homeBadge'></span>
                    What I Offer
                    </span>
                </div>
                <br/>
                <h2 className='homeHeader'>Services that drive results</h2>
                <p className='subtopic'>Comprehensive data and AI solutions tailored
                     to transform your business operations and decision-making processes.
                </p>

                
               
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                        <div className='serviceCard d-flex flex-column h-100 animate-up'>
                            <div>
                                {service.icon}
                            </div>
                            <br/>
                           
                            <h3 className='home-subheader'>{service.title}</h3>
                            <p>{service.description}</p>
                            <FlatButton
                            title={service.cta}
                            className='borderlessbtn mt-auto text-start'
                            icon={<RightOutlined />}
                            />
                        </div>
                        </div>
                    ))}
                </div>
                <br/>
                <div style={{textAlign:'center'}}>
                    <FlatButton title="Explore all services" className='btn-xl btnPrimary btn'/>
                </div>
                    
            </div>
        </section>




        
    )
}


{/* <div className="horizontal-scroll">
  {items.map((item) => (
    <div className="card" key={item.id}>
      {item.title}
    </div>
  ))}
</div> */}