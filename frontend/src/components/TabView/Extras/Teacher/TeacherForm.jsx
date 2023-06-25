import React from 'react';
import { Form, Input, Button } from 'antd';

const TeacherForm = ({ onSubmit, nextTab, setActiveKey,formData }) => {
  const onFinish = (values) => {
    console.log('Form values:', values);

    console.log(values);
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
        name="seedTeacherName"
        label="Name of the teacher provided with seed money"
        rules={[{ required: true, message: 'Please enter the teacher name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="seedamount"
        label="The amount of seed money (INR in Lakhs)"
        rules={[{ required: true, message: 'Please enter the seed money amount' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="seedyear"
        label="Year of receiving"
        rules={[{ required: true, message: 'Please enter the year of receiving' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="link"
        label="Link to the policy document for Sanction of seed money / grants for research from the institution"
        rules={[{ required: true, message: 'Please enter the document link' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Research details
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TeacherForm;
