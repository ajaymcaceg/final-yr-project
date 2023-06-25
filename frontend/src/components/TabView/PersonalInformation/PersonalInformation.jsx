import React from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
  Col,
  Row,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_PRESET,
  CLOUDINARY_URL,
} from "../../../env";

const { Option } = Select;

// interface PersonalInfo {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber?: string;
//   gender?: string;
//   dateOfBirth?: string;
//   currentAddress?: string;
//   permanentAddress?: string;
//   photo?: string;
// }

const formItemLayout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 22,
  },
};

// interface FormProps {
//   onSubmit: (values: any) => void;
//   nextTab: string;
//   setActiveKey: (values: any) => void;
// }

export const PersonalInformation = ({ onSubmit, nextTab, setActiveKey }) => {
  const onFinish = (values) => {
    // Handle form submission here
    console.log({
      personalInfo: {
        ...values,
      },
    });
    if (values.photo?.length) {
      values.photo = values.photo[0]?.response?.secure_url;
    }
    values.dateOfBirth = values?.dateOfBirth?.toISOString();
    onSubmit({
      personalInfo: {
        ...values,
      },
    });
    setActiveKey(nextTab);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e);
    return e && e.fileList;
  };

  return (
    <div>
      <div className="bg-slate-600 px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> Personal Information</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-slate-100 p-2">
        <Form onFinish={onFinish} layout="vertical" {...formItemLayout}>
          <Row>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input />
              </Form.Item>{" "}
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                // rules={[
                //   { required: true, message: "Please enter your email" },
                //   { type: "email", message: "Please enter a valid email" },
                // ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                // rules={[{ required: true, message: "Please input value" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                label="Gender"
                name="gender"
                // rules={[{ required: true, message: "Please input value" }]}
              >
                <Select>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                // rules={[{ required: true, message: "Please input value" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Current Address"
                name="currentAddress"
                // rules={[{ required: true, message: "Please input value" }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item
                label="Permanent Address"
                name="permanentAddress"
                // rules={[{ required: true, message: "Please input value" }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Photo"
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e && e.fileList;
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
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
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
