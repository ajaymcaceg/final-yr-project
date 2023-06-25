import React from "react";
import { Form, Input, Button, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";

// interface FacultyPublicationFormProps {
//   onSubmit: (values: any) => void;
//   nextTab: string;
//   setActiveKey: (values: any) => void;
// }

const FacultyPublication = ({ onSubmit, nextTab, setActiveKey }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    onSubmit(values);
    setActiveKey(nextTab);
  };

  const handleAddMore = () => {
    const publicationsFields = form.getFieldValue("facultyPublication") || [];
    form.setFieldsValue({ facultyPublication: [...publicationsFields, {}] });
  };

  return (
    <div>
      <div className="bg-slate-600 px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Faculty Publication</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-slate-100 p-2">
        <Form form={form} onFinish={handleFormSubmit} layout="vertical">
          <Form.List name="facultyPublication">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      {...field}
                      name={[field.name, "booksPublished"]}
                      label="Books Published"
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                      className="px-3"
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "chaptersPublishedAndReferences"]}
                      label="Chapters Published and References"
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "internationalOrNationalJournals"]}
                      label="International/National Journals"
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                      className="px-3"
                    >
                      <TextArea rows={5} />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "internationalOrNationalConferences"]}
                      label="International/national Conferences"
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                      style={{
                        display: "inline-block",
                        width: "calc(50% - 8px)",
                      }}
                    >
                      <TextArea rows={5} />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "patents"]}
                      label="Patents (if any)"
                      // rules={[
                      //   { required: true, message: "Please enter value" },
                      // ]}
                    >
                      <Input />
                    </Form.Item>

                    {fields.length > 1 && (
                      <Button type="default" onClick={() => remove(field.name)}>
                        Remove
                      </Button>
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
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save as draft
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </div>
  );
};

export default FacultyPublication;
