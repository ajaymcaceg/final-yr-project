import React from "react";
import { Form, Input, Select, Button, message, Typography } from "antd";

const { Option } = Select;

interface EducationFormProps {
  onSubmit: (values: any) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

export const Education: React.FC<EducationFormProps> = ({
  onSubmit,
  setActiveKey,
  nextTab,
}) => {
  const handleFormSubmit = (values: any) => {
    if (values?.universities?.length) {
      onSubmit({
        education: values,
      });
      setActiveKey(nextTab);
    } else {
      message.warning("Please add atleast 1 university degree");
    }
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white">Education</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form onFinish={handleFormSubmit}>
          {/* <Form.Item name="type" label="Type">
        <Select>
          <Option value="UG">UG</Option>
          <Option value="PG">PG</Option>
          <Option value="PHD">PHD</Option>
        </Select>
      </Form.Item> */}

          <Form.List name="universities">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      label="Type"
                      name={[field.name, "type"]}
                      fieldKey={[field.fieldKey, "type"]}
                      rules={[
                        { required: true, message: "Please select the type" },
                      ]}
                    >
                      <Select>
                        <Option value="UG">UG</Option>
                        <Option value="PG">PG</Option>
                        <Option value="PHD">PHD</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label="University"
                      name={[field.name, "university"]}
                      fieldKey={[field.fieldKey, "university"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter the university",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Certificate"
                      name={[field.name, "certificate"]}
                      fieldKey={[field.fieldKey, "certificate"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter the certificate",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    {fields.length > 1 && (
                      <div className="m-2 mb-6 flex justify-center">
                        <Button onClick={() => remove(field.name)}>
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                ))}

                <Form.Item>
                  <Button onClick={() => add()}>Add University</Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item name="portfolioURL" label="Portfolio URL">
            <Input />
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
