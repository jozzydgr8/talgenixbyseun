import { BlogsListed } from "./DashboardComponent/BlogsListed"
import { SubscriberList } from "./DashboardComponent/SubscriberList"

export const Dashboard = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2>Dashboard</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{background:"white", padding:'12px', borderRadius:'5px', marginBottom:'12px',  boxShadow: '0 4px 6px -1px var(--deep-dark-teal)'}}>
                            <BlogsListed/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div style={{background:"white", padding:'12px', borderRadius:'5px',  boxShadow: '0 4px 6px -1px var(--deep-dark-teal)'}}>
                            <SubscriberList/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}