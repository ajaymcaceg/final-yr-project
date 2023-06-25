import React from 'react';
import { Form, Input, Button } from 'antd';

const PatentForm = ({ onSubmit, nextTab, setActiveKey,formData }) => {
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
      <Form.Item label="Name of the Teacher" name="teacherName" >
        <Input />
      </Form.Item>
      <Form.Item label="Patent Number" name="patentNumber" >
        <Input />
      </Form.Item>
      <Form.Item label="Title of the Patent" name="patentTitle" >
        <Input />
      </Form.Item>
      <Form.Item label="Year of Award / Publish of Patent" name="patentawardYear" >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Patent
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PatentForm;
