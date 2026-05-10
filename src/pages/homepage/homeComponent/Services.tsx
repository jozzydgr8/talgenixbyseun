import {servicesData} from '../../../shared/Data'
import { FlatButton } from '../../../shared/FlatButton'
import {SendOutlined} from '@ant-design/icons'
export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2 className='homeHeader'>Explore Our Services</h2>
                <br/>
                <div className="row">
                    {servicesData.map((service, index)=>(
                        <div className="col-md-3" key={index} style={{marginBottom:'20px'}}>
                            <div className='serviceCard d-flex flex-column h-100 animate-up'>
                                <h3 className='home-subheader'>{service.title}</h3>
                                <br/>
                                <p>{service.description}</p>
                                <br/>
                                <FlatButton title={service.cta} className='borderlessbtn mt-auto text-start' icon={<SendOutlined />}/>
                                
                            </div>
                        </div>
                    ))}
                        
                </div>
                    
            </div>
        </section>
    )
}