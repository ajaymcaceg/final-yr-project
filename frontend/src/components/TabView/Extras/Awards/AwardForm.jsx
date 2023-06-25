import React from 'react';
import { Form, Input, Button } from 'antd';

const AwardForm = ({ onSubmit, nextTab, setActiveKey,formData }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit({
        extras: {
          ...formData.extras,
         ...values
        },
      });

  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="Year of Award" name="awardYear" >
        <Input />
      </Form.Item>
      <Form.Item label="Title of the Innovation" name="innovationTitle" >
        <Input />
      </Form.Item>
      <Form.Item label="Name of the Awardee" name="awardeeName" >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name of the Awarding Agency with Contact Details"
        name="awardingAgency"
        
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Category (Institution/Teacher/Research Scholar/Student)"
        name="category"
        
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Award
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AwardForm;
