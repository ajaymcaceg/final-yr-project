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

const { TextArea } = Input;

interface DesignationFormProps {
  onSubmit: (values: any) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

const Designation: React.FC<DesignationFormProps> = ({
  onSubmit,
  nextTab,
  setActiveKey,
}) => {
  const handleFormSubmit = (values: any) => {
    onSubmit({ designation: values });
    setActiveKey(nextTab);
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white">Designation</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
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
            <Col span={6}>
              <Form.Item
                name={["additionalResponsibilities", "order"]}
                label="Order"
                rules={[{ required: true, message: "Please enter value" }]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name={["additionalResponsibilities", "upload"]}
                label="Upload"
                rules={[{ required: true, message: "Please upload a file" }]}
              >
                <Button>Upload</Button>
              </Form.Item>
            </Col>
          </Row>
          <Form.List name="sections">
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
                          rules={[
                            { required: true, message: "Please upload a file" },
                          ]}
                        >
                          <Upload>
                            <Button>Upload Letter</Button>
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
          </Form.List>
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
