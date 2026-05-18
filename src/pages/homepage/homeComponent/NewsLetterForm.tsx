import { Formik } from "formik"
import * as Yup from 'yup';
import { Form } from "antd";

const Styles = {
    formStyle :{
        padding:"30px",
        color:"black",
        backgroundColor:"white",
        borderRadius:"12px"
    },
    formInput:{
        width:"100%",
        borderRadius:"8px",
        padding:"10px",
    }
}
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    service: Yup.string().required("Service is required"),
    message: Yup.string().required("Message is required")
});

export const NewsLetterForm = ()=>{
    return(
        <Formik 
        initialValues={{
            firstName:"",
            lastName:'',
            email:"",
            service:'',
            message:""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, resetForm)=>{console.log(values)}}
        >
            {formik=>{
                return(
                    <div style={Styles.formStyle}>
                        <Form layout="vertical" onFinish={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                   <div>
                                     <Form.Item label="First Name" >
                                        <input style={Styles.formInput}
                                        name="firstName"
                                        type="text"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required />  
                                    </Form.Item>
                                   </div>
                                </div>

                                <div className="col-md-6">
                                    <div>
                                        <Form.Item label="Last Name" >
                                            <input style={Styles.formInput}
                                            name="lastName"
                                            type="text"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required />  
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        
                    </Form>
                    </div>
                )
            }}

        </Formik>
    )
}