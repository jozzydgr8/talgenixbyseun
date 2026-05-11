import {servicesData} from '../../../shared/Data'
import { FlatButton } from '../../../shared/FlatButton'
import {SendOutlined} from '@ant-design/icons'
export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2 className='homeHeader'>Explore Services</h2>
                <br/>
                <div className="horizontal-scroll">
                    {servicesData.map((service, index) => (
                        <div className="service-wrapper" key={index}>
                        <div className='serviceCard d-flex flex-column h-100 animate-up'>
                            <div
                            className='divImage'
                            style={{
                                backgroundImage: `url(${service.image})`,
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "200px",
                                borderRadius: "8px",
                            }}
                            ></div>
                            <h3 className='home-subheader'>{service.title}</h3>
                            <p>{service.description}</p>
                            <FlatButton
                            title={service.cta}
                            className='borderlessbtn mt-auto text-start'
                            icon={<SendOutlined />}
                            />
                        </div>
                        </div>
                    ))}
                </div>
                    
            </div>
        </section>

        
    )
}