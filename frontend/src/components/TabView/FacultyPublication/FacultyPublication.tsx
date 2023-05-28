import React from "react";
import { Form, Input, Button, Typography } from "antd";

interface FacultyPublicationFormProps {
  onSubmit: (values: any) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

const FacultyPublication: React.FC<FacultyPublicationFormProps> = ({
  onSubmit,
  nextTab,
  setActiveKey,
}) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values: any) => {
    onSubmit(values);
    setActiveKey(nextTab);
  };

  const handleAddMore = () => {
    const publicationsFields = form.getFieldValue("facultyPublication") || [];
    form.setFieldsValue({ facultyPublication: [...publicationsFields, {}] });
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Faculty Plublication</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form form={form} onFinish={handleFormSubmit}>
          <Form.List name="facultyPublication">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      {...field}
                      name={[field.name, "booksPublished"]}
                      label="Books Published"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "chaptersPublishedAndReferences"]}
                      label="Chapters Published and References"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "internationalJournals"]}
                      label="International Journals"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "nationalJournals"]}
                      label="National Journals"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "internationalConferences"]}
                      label="International Conferences"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "nationalConferences"]}
                      label="National Conferences"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      name={[field.name, "patents"]}
                      label="Patents (if any)"
                      rules={[
                        { required: true, message: "Please enter value" },
                      ]}
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
