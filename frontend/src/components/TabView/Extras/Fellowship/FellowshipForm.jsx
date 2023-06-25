import React from 'react';
import { Form, Input, Button } from 'antd';

const FellowshipForm = ({ onSubmit, nextTab, setActiveKey,formData }) => {
  const onFinish = (values) => {
    console.log('Form values:', values);

    onSubmit({
      extras: {
        ...formData.extras,
       ...values
      },
    });
    // setActiveKey(nextTab);
  };

  return (
    <Form onFinish={onFinish}>
     
      <Form.Item
        name="fellowShipteacherName"
        label="Name of the teacher awarded national/ international fellowship/financial support"
        // rules={[
        //   { required: true, message: 'Please enter the teacher name' },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fellowshipName"
        label="Name of the award/fellowship"
        // rules={[
        //   { required: true, message: 'Please enter the award/fellowship name' },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fellowshipAwardYear"
        label="Year of the Award"
        // rules={[{ required: true, message: 'Please enter the year of the award' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="fellowshipAwardingAgency"
        label="Awarding Agency"
        // rules={[{ required: true, message: 'Please enter the awarding agency' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fellowShipLink"
        label="Link to certificates"
        // rules={[{ required: true, message: 'Please enter the certificate link' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add fellowship awards
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FellowshipForm;
