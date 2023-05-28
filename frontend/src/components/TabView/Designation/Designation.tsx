import React from "react";
import { Form, Input, InputNumber, Button, Typography } from "antd";

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
          <span className="text-white"> Designation</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form onFinish={handleFormSubmit} layout="vertical">
          <Form.Item
            name="designation"
            label="Designation"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="academicYear"
            label="Academic Year"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="semester"
            label="Semester"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["courseTeaching", "theory"]}
            label="Theory"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["courseTeaching", "laboratory"]}
            label="Laboratory"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["additionalResponsibilities", "order"]}
            label="Order"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name={["additionalResponsibilities", "details"]}
            label="Details"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save as draft
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Designation;
