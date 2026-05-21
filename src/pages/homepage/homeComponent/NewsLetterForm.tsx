import { Formik } from "formik"
import * as Yup from 'yup';
import { Form, Input, Select } from "antd";
import { FlatButton } from "../../../shared/FlatButton";
import {SendOutlined} from '@ant-design/icons';

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
                                        <Input style={Styles.formInput}
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
                                            <Input style={Styles.formInput}
                                            name="lastName"
                                            type="text"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required />  
                                        </Form.Item>
                                    </div>
                                </div>

                                <Form.Item label="Email Address" >
                                    <Input style={Styles.formInput}
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required />
                                </Form.Item>
                                <Form.Item label="Select Service">
                                <Select
                                    placeholder="Choose Your Field"
                                    value={formik.values.service}
                                    onChange={(value) =>
                                    formik.setFieldValue("service", value)
                                    }
                                    onBlur={() =>
                                    formik.setFieldTouched("service", true)
                                    }
                                    options={[
                                    { value: "data-analytics", label: "Data Analytics" },
                                    { value: "business-intelligence", label: "Business Intelligence" },
                                    { value: "ai-solutions", label: "AI Solutions" },
                                    { value: "process-automation", label: "Process Automation" },
                                    { value: "corporate-training", label: "Corporate Training" },
                                    { value: "consulting", label: "Consulting" },
                                    { value: "others", label: "Others" },
                                    ]}
                                />
                                </Form.Item>

                                <Form.Item label="Your Message" >
                                    <Input.TextArea style={Styles.formInput}
                                        name="message"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required />
                                </Form.Item>

                                <FlatButton className="btn btnPrimary" title="Subscribe" icon={<SendOutlined/>} onClick={formik.handleSubmit}/>
                            </div>
                        
                    </Form>
                    </div>
                )
            }}

        </Formik>
    )
}