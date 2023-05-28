import React from "react";
import { Form, Input, DatePicker, InputNumber, Button, Typography } from "antd";

interface EContentFormProps {
  onSubmit: (values: any) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

const EContent: React.FC<EContentFormProps> = ({
  onSubmit,
  nextTab,
  setActiveKey,
}) => {
  const handleFormSubmit = (values: any) => {
    onSubmit({ eContent: values });
    setActiveKey(nextTab);
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Personal Information</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="domain"
            label="Domain"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="developedFor"
            label="Developed For"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="uploadedDate"
            label="Uploaded Date"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="relevantDocumentsUsed"
            label="Relevant Documents Used"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="link"
            label="Link"
            rules={[{ required: true, message: "Please enter value" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit form
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EContent;
