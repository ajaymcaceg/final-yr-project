import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Typography,
  Radio,
  Upload,
} from "antd";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_PRESET,
  CLOUDINARY_URL,
} from "../../../env";
import { UploadOutlined } from "@ant-design/icons";

const ResearchProject = ({ onSubmit, nextTab, setActiveKey }) => {
  const onFinish = (values) => {
    onSubmit(values);
    setActiveKey(nextTab);
  };

  return (
    <div>
      {" "}
      <div className="bg-slate-600 px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Research projects</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-slate-100 p-2">
        <Form
          name="researchProjectForm"
          onFinish={onFinish}
          autoComplete="off"
          preserve={false}
          layout="vertical"
        >
          <Form.List name="researchProjects">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      label={`Name of the research project`}
                      name={[field.name, "name"]}
                      // rules={[{ required: true, message: "Please enter name" }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                      className="pr-6"
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Funding Agency"
                      name={[field.name, "fundingAgency"]}
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: "Please enter funding agency",
                      //   },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Type"
                      name={[field.name, "type"]}
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                    >
                      <Radio.Group className="ml-10">
                        <Radio style={{ display: "block" }} value="Government">
                          Government
                        </Radio>
                        <Radio
                          style={{ display: "block" }}
                          value="Non government"
                        >
                          Non government
                        </Radio>
                        <Radio style={{ display: "block" }} value="Others">
                          Others
                        </Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                      label="Year"
                      name={[field.name, "year"]}
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      label="Duration"
                      name={[field.name, "duration"]}
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      label="Funds Provided (INR in lakhs)"
                      name={[field.name, "fundsProvided"]}
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      label="Relevant Documents"
                      name={[field.name, "relevantDocuments"]}
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(66% - 8px)",
                      }}
                    >
                      <Upload
                        name="photo"
                        action={CLOUDINARY_URL}
                        listType="picture"
                        data={(file) => ({
                          upload_preset: CLOUDINARY_PRESET,
                          api_key: CLOUDINARY_API_KEY,
                          file,
                        })}
                        multiple="false"
                        maxCount={1}
                      >
                        <Button
                          icon={<UploadOutlined />}
                          style={{ width: "100%" }}
                        >
                          Upload
                        </Button>
                      </Upload>
                    </Form.Item>

                    {fields.length > 1 && (
                      <Button type="default" onClick={() => remove(field.name)}>
                        Remove
                      </Button>
                    )}
                  </div>
                ))}

                <div className="block">
                  <Form.Item>
                    <Button onClick={() => add()} style={{ marginTop: "10px" }}>
                      Add
                    </Button>
                  </Form.Item>
                </div>
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
