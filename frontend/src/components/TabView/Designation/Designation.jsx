import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Typography,
  Row,
  Col,
  Radio,
  Upload,
} from "antd";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_PRESET,
  CLOUDINARY_URL,
} from "../../../env";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

// interface DesignationFormProps {
//   onSubmit: (values: any) => void;
//   nextTab: string;
//   setActiveKey: (values: any) => void;
// }

const Designation = ({ onSubmit, nextTab, setActiveKey }) => {
  const handleFormSubmit = (values) => {
    console.log(values, "-");
    // if (values?.additionalResponsibilities.order) {
    //   values?.additionalResponsibilities.order = [values?.additionalResponsibilities.order];
    // }
    onSubmit({ designation: [values] });
    setActiveKey(nextTab);
  };

  return (
    <div>
      <div className="bg-slate-600 px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white">Designation</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-slate-100 p-2">
        <Form onFinish={handleFormSubmit} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="designation"
                label="Designation"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="academicYear"
                label="Academic Year"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="semester"
                label="Semester"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="courseTeaching"
                label="Course Teaching"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="ml-5">
              <Form.Item
                name="courseType"
                // label="Course Teaching"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <Radio.Group>
                  <Radio value="theory">Theory</Radio>
                  <Radio value="laboratory">Laboratory</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={["additionalResponsibilities", "details"]}
                label="Details"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <TextArea />
              </Form.Item>
            </Col>
            {/* <Col span={6}>
              <Form.Item
                name={["additionalResponsibilities", "order"]}
                label="Order"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <InputNumber />
              </Form.Item>
            </Col> */}
            <Col span={6}>
              <Form.Item
                name={["additionalResponsibilities", "order"]}
                label="Order"
                // rules={[{ required: true, message: "Please upload a file" }]}
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
                  <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          {/* <Form.List name="sections">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          {...field}
                          name={[field.name, "studentsEnrolled"]}
                          label="Students Enrolled"
                          rules={[
                            { required: true, message: "Please enter value" },
                          ]}
                        >
                          <TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          {...field}
                          name={[field.name, "internationalAwards"]}
                          label="International Awards/Fellowship"
                          rules={[
                            { required: true, message: "Please enter value" },
                          ]}
                        >
                          <TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          {...field}
                          name={[field.name, "letterUpload"]}
                          label="Letter Upload"
                          valuePropName="fileList"
                          getValueFromEvent={(e) => {
                            if (Array.isArray(e)) {
                              return e;
                            }
                            return e && e.fileList;
                          }}
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
                            maxCount={1}
                            multiple="false"
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
                  </div>
                ))}
                <Row gutter={16}>
                  <Col span={24}>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      // icon={<PlusOutlined />}
                    >
                      Add Section
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Form.List> */}
          <Row gutter={16}>
            <Col span={24}>
              <Button type="primary" htmlType="submit" className="mt-5">
                Save as Draft
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Designation;
