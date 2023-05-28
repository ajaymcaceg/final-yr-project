import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Switch,
  Button,
  Typography,
  Radio,
  Row,
  Col,
} from "antd";

// interface ExperienceFormProps {
//   onSubmit: (values: any) => void;
//   nextTab: string;
//   setActiveKey: (values: any) => void;
// }

const Experience = ({ onSubmit, nextTab, setActiveKey }) => {
  const [form] = Form.useForm();
  const [hasExp, sethasExp] = useState(false);
  const handleFormSubmit = (values) => {
    onSubmit({ experience: values });
    setActiveKey(nextTab);
  };

  const handleAddMore = () => {
    const experienceFields = form.getFieldValue("experiences") || [];
    form.setFieldsValue({ experiences: [...experienceFields, {}] });
  };

  const handleRemove = (index) => {
    const experienceFields = form.getFieldValue("experiences") || [];
    form.setFieldsValue({
      experiences: experienceFields.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Experience</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form
          form={form}
          onFinish={handleFormSubmit}
          initialValues={{ experiences: [{}] }}
          layout="vertical"
        >
          <Form.Item
            name="hasExperience"
            label="Any previous work experience"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Row>
              <Radio.Group onChange={(e) => sethasExp(e.target.value)}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Row>
          </Form.Item>
          {hasExp ? (
            <>
              <Form.List name="experiences">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <div key={field.key}>
                        <Form.Item
                          {...field}
                          name={[field.name, "appointmentOrder"]}
                          label="Appointment Order"
                          rules={[
                            { required: true, message: "Please enter value" },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          {...field}
                          name={[field.name, "experienceCertificate"]}
                          label="Experience Certificate"
                          rules={[
                            { required: true, message: "Please enter value" },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Row gutter={16}>
                          <Col span={12}>
                            <Form.Item
                              {...field}
                              name={[field.name, "joiningDate"]}
                              label="Joining Date"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter value",
                                },
                              ]}
                            >
                              <DatePicker />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              {...field}
                              name={[field.name, "leavingDate"]}
                              label="Leaving Date"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter value",
                                },
                              ]}
                            >
                              <DatePicker />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Form.Item
                          {...field}
                          name={[field.name, "experience"]}
                          label="Experience"
                          rules={[
                            { required: true, message: "Please enter value" },
                          ]}
                        >
                          <Input.TextArea />
                        </Form.Item>

                        {index > 0 && (
                          <div className="m-2 mb-6 flex justify-center">
                            <Button onClick={() => remove(field.name)}>
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className=" mb-6 flex ">
                      <Button
                        type="default"
                        onClick={() => handleAddMore()}
                        className="mr-4"
                      >
                        Add
                      </Button>
                    </div>
                  </>
                )}
              </Form.List>
            </>
          ) : (
            <></>
          )}

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

export default Experience;
