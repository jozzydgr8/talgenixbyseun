import { Modal, Form, Input, Button, Select } from "antd";
import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { UseAuthContext } from "../../context/UseAuthContext";

type proptype = {
  selectedEmail: string | string[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type valueprops = {
  subject: string;
  message: string;
  service: string; // 👈 Added service type
};

// Mock list of your services (Replace these with your actual schema values)
const SERVICE_OPTIONS = [
{ label: "All Services", value: "all" },
{ value: "data-analytics", label: "Data Analytics" },
{ value: "business-intelligence", label: "Business Intelligence" },
{ value: "ai-solutions", label: "AI Solutions" },
{ value: "process-automation", label: "Process Automation" },
{ value: "corporate-training", label: "Corporate Training" },
{ value: "consulting", label: "Consulting" },
   
];

export const SendMessage = ({ selectedEmail, isModalOpen, setIsModalOpen }: proptype) => {
  const { user } = UseAuthContext();
  const [isSending, setIsSending] = useState(false); // 👈 Prevent double submission

  const deliverNewsLetter = async (values: valueprops) => {
    setIsSending(true);
    try {
      const response = await fetch("https://seunbrandserver.vercel.app/message/send_newsletter", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({
          subject: values.subject,
          message: values.message,
          service: values.service, // 👈 Passing the selected filter to the backend
          recipient_email: Array.isArray(selectedEmail) ? selectedEmail : [selectedEmail]
        })
      });

      if (!response.ok) {
        throw Error('An error occurred');
      }
      toast.success('Email sent Successfully!');
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      subject: "",
      message: "",
      service: "all", // 👈 Default filter value
    },
    validationSchema: Yup.object({
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
      service: Yup.string().required("Please select a target service group"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await deliverNewsLetter(values);
      resetForm();
    },
  });

  const modalTitle = Array.isArray(selectedEmail)
    ? selectedEmail.length > 1
      ? "Send Filtered Newsletter"
      : `Send Email to ${selectedEmail[0]}`
    : `Send Email to ${selectedEmail}`;

  return (
    <Modal
      title={modalTitle}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <Form layout="vertical" onFinish={formik.handleSubmit}>
        
        {/* 👇 1. SERVICE FILTER SELECTOR */}
        {Array.isArray(selectedEmail) && selectedEmail.length > 1 && (
          <Form.Item
            label="Filter Subscribers by Service"
            validateStatus={formik.errors.service && formik.touched.service ? "error" : ""}
            help={formik.touched.service && formik.errors.service}
          >
            <Select
              value={formik.values.service}
              onChange={(value) => {
                formik.setFieldValue("service", value);
              }}
              options={SERVICE_OPTIONS}
            />
          </Form.Item>
        )}

        <Form.Item
          label="Subject"
          validateStatus={formik.errors.subject && formik.touched.subject ? "error" : ""}
          help={formik.touched.subject && formik.errors.subject}
        >
          <Input
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Message"
          validateStatus={formik.errors.message && formik.touched.message ? "error" : ""}
          help={formik.touched.message && formik.errors.message}
          extra="💡 Use {{firstName}} or {{lastName}} anywhere in your text to insert the subscriber's name automatically. (e.g., 'Hi {{firstName}}, check this out!')"
        >
          <Input.TextArea
            rows={6}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block loading={isSending}>
          Send Email
        </Button>
      </Form>
    </Modal>
  );
};