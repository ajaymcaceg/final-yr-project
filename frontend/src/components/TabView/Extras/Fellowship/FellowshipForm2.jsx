import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const FellowshipForm2 = ({ onSubmit, nextTab, setActiveKey,formData }) => {
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      onSubmit({
          extras: {
            ...formData.extras,
           ...values
          },
        });
      // form.resetFields();
    };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Name of the Research Fellow"
        name="researchFellowName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Year of Enrolment"
        name="yearOfEnrolment"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Duration of Fellowship"
        name="fellowshipDuration"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Type of the Fellowship"
        name="fellowshipType"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Granting Agency"
        name="grantingAgency"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Qualifying Exam (NET, GATE, etc.)"
        name="qualifyingExam"
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Fellowship
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FellowshipForm2;
