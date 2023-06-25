import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const WorkshopForm = ({ onSubmit, nextTab, setActiveKey,formData }) => {
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
      <Form.Item label="Year" name="workshopYear" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Name of the Workshop/Seminar"
        name="workshopName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Number of Participants"
        name="participantCount"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date From - To"
        name="workshopDateRange"
        rules={[{ required: true }]}
      >
        <DatePicker.RangePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Link to the Activity Report on the Website"
        name="activityReportLink"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Data
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WorkshopForm;
