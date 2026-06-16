import { Form, Input, Modal, Popconfirm, Select, Switch, Upload, UploadFile } from "antd"
import { Formik } from "formik"
import { FlatButton } from "../../shared/FlatButton"
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { useState } from "react"
import { BlogHooks } from "../Hooks/BlogHooks"

type modalType = {
    isOpen: boolean,
    handleCloseModal: () => void,
    title: string,
    excerpt: string,
    readingTime: number,
    category: string,
    featuredImage: string,
    featured: boolean,
    _id:string,
}

export const UpdateBlog = ({ isOpen, handleCloseModal, title, excerpt, readingTime, category, featuredImage, featured, _id }: modalType) => {
    const [fileList, setFileList] = useState<UploadFile[]>(featuredImage ? [{
        uid: '-1',
        name: 'current_image.png',
        status: 'done',
        url: featuredImage,
    }] : []);
    const [loading, setLoading] = useState(false);
    const{blogUpdate, deleteBlog} = BlogHooks();

    return (
        <Modal
            onCancel={handleCloseModal}
            open={isOpen}
            footer={null}
            title="Update Product"
        >
            <Formik
            enableReinitialize
                initialValues={{
                    title,
                    category,
                    excerpt,
                    readingTime,
                    featuredImage: '',
                    featured: featured,
                }}
                onSubmit={(values) => {
                    console.log({ ...values, featuredImage: fileList });
                    blogUpdate({ setLoading,values, fileList, title, excerpt, featured, category,_id, readingTime, handleCloseModal })
                }}
            >
                {(formik) => (
                    <Form layout="vertical" onFinish={formik.handleSubmit}>
                        <Form.Item label="Title">
                            <Input
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item label="Select Category">
                                <Select
                                    placeholder="Choose Your Field"
                                    value={formik.values.category}
                                    onChange={(value) =>
                                    formik.setFieldValue("category", value)
                                    }
                                    onBlur={() =>
                                    formik.setFieldTouched("category", true)
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

                        <Form.Item label="Excerpt">
                            <Input
                                name="excerpt"
                                value={formik.values.excerpt}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item label="Featured">
                            <Switch
                                checked={formik.values.featured}
                                onChange={(checked) => formik.setFieldValue("featured", checked)}
                            />
                        </Form.Item>

                        <Form.Item label="Reading Time">
                            <Input
                                name="readingTime"
                                type="number"
                                value={formik.values.readingTime}
                                onChange={formik.handleChange}
                            />
                        </Form.Item>

                        <Form.Item label="Image">
                            <Upload
                                listType="picture"
                                fileList={fileList}
                                beforeUpload={() => false} // prevent auto upload
                                onChange={({ fileList }) => {
                                    // Keep only the latest featuredImage
                                    const latestFile = fileList.slice(-1)
                                    setFileList(latestFile)
                                    formik.setFieldValue("featuredImage", latestFile[0])
                                }}
                            onRemove={() => {
                                setFileList([])
                                formik.setFieldValue("featuredImage", '')
                            }}
                            >
                                <FlatButton title="Upload Image" icon={<UploadOutlined />} className="btn btnSuccess" />
                            </Upload>
                        </Form.Item>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <FlatButton
                                title="Update"
                                disabled={loading}
                                className="btn btnSuccess"
                                onClick={formik.handleSubmit}
                            />
                            <Popconfirm
                            title="Are you sure to delete this blog?"
                            description="This action cannot be undone."
                            onConfirm={() => deleteBlog(_id)}
                            okText="Yes, delete"
                            cancelText="Cancel"
                            >
                            <span>
                                <FlatButton
                                className=" btn btnPrimary"
                                title="Delete Blog"
                                icon={<DeleteOutlined />}
                            />
                            </span>
                            </Popconfirm>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}