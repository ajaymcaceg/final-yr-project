import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Upload,
  message,
  Typography,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_PRESET,
  CLOUDINARY_URL,
} from "../../../env";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export const ProjectSupervison = ({ onSubmit, nextTab, setActiveKey }) => {
  const handleUpload = (file) => {
    // Perform file upload logic here
    message.success(`${file.name} uploaded successfully.`);
    return false; // Prevent file list display
  };

  const onFinish = (values) => {
    onSubmit(values);
    setActiveKey(nextTab);
    console.log("Form values:", values);
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Projects and Supervision</span>
        </Typography.Title>
      </div>

      <Form onFinish={onFinish} layout="vertical">
        <div className="w-full bg-[#7fc4fb] p-2">
          <Row gutter={16}>
            <Col span={24}>
              <h2>Projects</h2>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Ug Input" name="ugInput">
                <Input placeholder="Ug Input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Upload Thesis" name="ugThesisUpload">
                <Upload
                  name="photo"
                  action={CLOUDINARY_URL}
                  listType="picture"
                  data={(file) => ({
                    upload_preset: CLOUDINARY_PRESET,
                    api_key: CLOUDINARY_API_KEY,
                    file,
                  })}
                  multiple="false"
                  maxCount={1}
                >
                  <Button style={{ width: "100%" }}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Pg Input" name="pgInput">
                <Input placeholder="Pg Input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Upload" name="pgUpload">
                <Upload
                  name="photo"
                  action={CLOUDINARY_URL}
                  listType="picture"
                  data={(file) => ({
                    upload_preset: CLOUDINARY_PRESET,
                    api_key: CLOUDINARY_API_KEY,
                    file,
                  })}
                  multiple="false"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="w-full bg-[#7fc4fb] p-2 mt-3">
          <Form.List name="phdSections">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    {index === 0 ? (
                      <Typography.Title level={4}>
                        {" "}
                        PHD and Research Scholars Supervision
                      </Typography.Title>
                    ) : (
                      <></>
                    )}
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          {...field}
                          label="Students Enrolled"
                          name={[field.name, "studentsEnrolled"]}
                          fieldKey={[field.fieldKey, "studentsEnrolled"]}
                        >
                          <TextArea rows={4} placeholder="Students Enrolled" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          {...field}
                          label="International Awards and Fellowship"
                          name={[field.name, "awardsFellowship"]}
                          fieldKey={[field.fieldKey, "awardsFellowship"]}
                        >
                          <TextArea
                            rows={4}
                            placeholder="International Awards and Fellowship"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}></Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          {...field}
                          label="Upload Letter"
                          name={[field.name, "letterUpload"]}
                          fieldKey={[field.fieldKey, "letterUpload"]}
                        >
                          <Upload
                            name="photo"
                            action={CLOUDINARY_URL}
                            listType="picture"
                            data={(file) => ({
                              upload_preset: CLOUDINARY_PRESET,
                              api_key: CLOUDINARY_API_KEY,
                              file,
                            })}
                            multiple="false"
                            maxCount={1}
                          >
                            <Button
                              icon={<UploadOutlined />}
                              style={{ width: "100%" }}
                            >
                              Upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Button
                          type="link"
                          onClick={() => {
                            remove(field.name);
                          }}
                          icon={<MinusCircleOutlined />}
                        >
                          Remove Section
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
                <Row gutter={16}>
                  <Col span={24}>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Ph.D. or Research Scholar Section
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
        </div>
        <Row gutter={16}>
          <Col span={24} className="mt-6 mb-2">
            <Button type="primary" htmlType="submit">
              Save as draft
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
