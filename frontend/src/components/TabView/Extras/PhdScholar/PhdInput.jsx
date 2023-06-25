import React from 'react';
import { Form, Input, Button } from 'antd';

const PhdInput = ({ onSubmit, nextTab, setActiveKey,formData }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit({
        extras: {
          ...formData.extras,
         ...values
        },
      });
    // setActiveKey(nextTab);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Name of the PhD Scholar"
        name="phdScholarName"
        // 
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name of the Department"
        name="departmentName"
        // 
      >
        <Input />
      </Form.Item>
      <Form.Item label="Name of the Guide/s" name="guideName" >
        <Input />
      </Form.Item>
      <Form.Item label="Title of the Thesis" name="thesisTitle" >
        <Input />
      </Form.Item>
      <Form.Item
        label="Year of Registration"
        name="registrationYear"
        
      >
        <Input />
      </Form.Item>
      <Form.Item label="Year of PhD Awarded" name="phdYear" >
        <Input />
      </Form.Item>
      <Form.Item
        label="Research Guide Recognition (Y/N)"
        name="researchGuideRecognition"
        
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Year of Recognition as a Research Guide"
        name="recognitionYear"
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

export default PhdInput;
