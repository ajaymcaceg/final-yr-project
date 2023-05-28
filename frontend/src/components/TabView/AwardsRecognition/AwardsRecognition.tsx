import React from "react";
import { Form, Input, InputNumber, Button, Typography } from "antd";

interface AwardsRecognitionFormProps {
  onSubmit: (values: any[]) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

const AwardsRecognition: React.FC<AwardsRecognitionFormProps> = ({
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
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Personal Information</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form
          name="awardsRecognitionForm"
          onFinish={onFinish}
          autoComplete="off"
          preserve={false}
        >
          <Form.List name="awardsRecognition">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      {...field}
                      label={`Award ${index + 1}`}
                      name={[field.name, "name"]}
                      rules={[{ required: true, message: "Please enter name" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Received From"
                      name={[field.name, "receivedFrom"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter received from",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Recognized Under"
                      name={[field.name, "recognizedUnder"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Level"
                      name={[field.name, "level"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Year"
                      name={[field.name, "year"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Incentives Received"
                      name={[field.name, "incentivesReceived"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Relevant Documents"
                      name={[field.name, "relevantDocuments"]}
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
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
                  <Button
                    // type="primary"
                    onClick={() => add()}
                    style={{ marginTop: "10px" }}
                  >
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

export default AwardsRecognition;
