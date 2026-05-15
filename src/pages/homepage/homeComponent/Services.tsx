import {servicesData} from '../../../shared/Data'
import { FlatButton } from '../../../shared/FlatButton'
import {RightOutlined} from '@ant-design/icons'
export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
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