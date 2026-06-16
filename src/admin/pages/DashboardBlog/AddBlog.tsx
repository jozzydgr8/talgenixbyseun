import { Button, Form, Input, Upload, Select, Switch } from "antd"
import { Formik } from "formik"
import { FlatButton } from "../../../shared/FlatButton";
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from "antd/es/upload/interface";
import { BlogHooks } from "../../Hooks/BlogHooks";
import * as Yup from 'yup';

export const AddBlog = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);
  const { postBlog } = BlogHooks();

  const beforeUpload = () => false;

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    excerpt: Yup.string().required("Description is required"),
    readingTime: Yup.number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable()
      .required("Reading time is required"),
  });

  return (
    <section>
      <div className="container-fluid">
        <h2>Add New Blog</h2>
        <Formik
          initialValues={{
            title: '', category: "", excerpt: "", readingTime: '', image: '', featured: false
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // Explicit check for file validation before calling your API hook
            if (fileList.length === 0) {
              alert("Please upload a featured image!"); // Or use your toast handler
              return;
            }
            postBlog({ values, setFileList, fileList, setLoading, resetForm });
          }}
        >
          {(formik) => (
            /* Changed onFinish to just native HTML onSubmit via formik */
            <Form 
              layout="vertical" 
              onFinish={formik.handleSubmit} 
              style={{ background: "white", padding: "30px", borderRadius: '12px' }}
            >
              {/* TITLE */}
              <Form.Item 
                label="Title" 
                validateStatus={formik.errors.title && formik.touched.title ? "error" : ""}
                help={formik.touched.title && formik.errors.title}
              >
                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* CATEGORY (Removed AntD rules, using Formik status management) */}
              <Form.Item 
                label="Select Category"
                validateStatus={formik.errors.category && formik.touched.category ? "error" : ""}
                help={formik.touched.category && formik.errors.category}
              >
                <Select
                  placeholder="Choose Your Field"
                  value={formik.values.category}
                  onChange={(value) => formik.setFieldValue("category", value)}
                  onBlur={() => formik.setFieldTouched("category", true)}
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

              {/* EXCERPT */}
              <Form.Item 
                label="Excerpt"
                validateStatus={formik.errors.excerpt && formik.touched.excerpt ? "error" : ""}
                help={formik.touched.excerpt && formik.errors.excerpt}
              >
                <Input
                  name="excerpt"
                  value={formik.values.excerpt}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* READING TIME */}
              <Form.Item 
                label="Reading Time (Minutes)"
                validateStatus={formik.errors.readingTime && formik.touched.readingTime ? "error" : ""}
                help={formik.touched.readingTime && formik.errors.readingTime}
              >
                <Input
                  name="readingTime"
                  type="number"
                  value={formik.values.readingTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Item>

              {/* FEATURED SWITCH */}
              <Form.Item label="Featured (Optional)">
                <Switch
                  checked={formik.values.featured}
                  onChange={(checked) => formik.setFieldValue("featured", checked)}
                />
              </Form.Item>

              {/* UPLOAD IMAGES (Removed AntD rules) */}
              <Form.Item label="Upload Images">
                <Upload.Dragger
                  accept="image/*"
                  multiple={false}
                  maxCount={1}
                  fileList={fileList}
                  onChange={handleFileChange}
                  beforeUpload={beforeUpload}
                  showUploadList
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Drag or Click to Upload</Button>
                </Upload.Dragger>
              </Form.Item>

              <br />
              {/* SUBMIT BUTTON */}
              <FlatButton
                title="Add Product"
                className="btn btnPrimary"
                disabled={loading}
                htmlType="submit" // Important for AntD components to fire standard form submits
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}