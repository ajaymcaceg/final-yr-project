import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  message,
  Typography,
  Col,
  Row,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_PRESET,
  CLOUDINARY_URL,
} from "../../../env";
const { Option } = Select;

// interface EducationFormProps {
//   onSubmit: (values: any) => void;
//   nextTab: string;
//   setActiveKey: (values: any) => void;
// }

export const Education = ({ onSubmit, setActiveKey, nextTab }) => {
  const handleFormSubmit = (values) => {
    if (values.ugCertificate?.length) {
      values.ugCertificate = values.ugCertificate[0]?.response?.secure_url;
    }
    if (values.pgCertificate?.length) {
      values.pgCertificate = values.pgCertificate[0]?.response?.secure_url;
    }
    if (values.phdCertificate?.length) {
      values.phdCertificate = values.phdCertificate[0]?.response?.secure_url;
    }
    onSubmit({ education: values });
    setActiveKey(nextTab);
    console.log("Form values:", values);
  };

  const getFileBase64Url = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <div className="bg-slate-600 px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white">Education</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-slate-100 p-2">
        <Form onFinish={handleFormSubmit} layout="vertical">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="UG " name="ugName">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="University" name="ugUniversity">
                <Input placeholder="University" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Certificate"
                name="ugCertificate"
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
                  multiple="false"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="PG " name="pgName">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="University" name="pgUniversity">
                <Input placeholder="University" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Certificate"
                name="pgCertificate"
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
                  multiple="false"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="PhD " name="phdName">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="University" name="phdUniversity">
                <Input placeholder="University" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Certificate"
                name="phdCertificate"
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
                  multiple="false"
                >
                  <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>

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
