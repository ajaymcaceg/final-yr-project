import React from "react";
import { Form, Input, InputNumber, Button, Typography } from "antd";

interface ResearchProjectFormProps {
  onSubmit: (values: any[]) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

const ResearchProject: React.FC<ResearchProjectFormProps> = ({
  onSubmit,
  nextTab,
  setActiveKey,
}) => {
  const onFinish = (values: any) => {
    onSubmit(values);
    setActiveKey(nextTab);
  };

  return (
    <div>
      {" "}
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Personal Information</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form
          name="researchProjectForm"
          onFinish={onFinish}
          autoComplete="off"
          preserve={false}
        >
          <Form.List name="researchProjects">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      label={`Project ${index + 1}`}
                      name={[field.name, "name"]}
                      rules={[{ required: true, message: "Please enter name" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Funding Agency"
                      name={[field.name, "fundingAgency"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter funding agency",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Type"
                      name={[field.name, "type"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Year"
                      name={[field.name, "year"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      label="Duration"
                      name={[field.name, "duration"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      label="Funds Provided"
                      name={[field.name, "fundsProvided"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      label="Relevant Documents"
                      name={[field.name, "relevantDocuments"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Details"
                      name={[field.name, "details"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input.TextArea />
                    </Form.Item>

                    {fields.length > 1 && (
                      <Button type="default" onClick={() => remove(field.name)}>
                        Remove
                      </Button>
                    )}
                  </div>
                ))}

                <Form.Item>
                  <Button onClick={() => add()} style={{ marginTop: "10px" }}>
                    Add
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

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

export default ResearchProject;
