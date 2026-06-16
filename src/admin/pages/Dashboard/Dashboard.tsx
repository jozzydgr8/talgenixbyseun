import { BlogsListed } from "./DashboardComponent/BlogsListed"
import { SubscriberList } from "./DashboardComponent/SubscriberList"

export const Dashboard = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2>Dashboard</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{background:"var(--dark-charcoal)", padding:'12px', borderRadius:'5px', marginBottom:'12px'}}>
                            <BlogsListed/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div style={{background:"var(--dark-charcoal)", padding:'12px', borderRadius:'5px'}}>
                            <SubscriberList/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}