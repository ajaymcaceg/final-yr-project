import React from "react";
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button,
  Typography,
  Row,
  Col,
  Radio,
} from "antd";
import TextArea from "antd/es/input/TextArea";

interface EContentFormProps {
  onSubmit: (values: any) => void;
  nextTab: string;
  setActiveKey: (values: any) => void;
}

const EContent: React.FC<EContentFormProps> = ({
  onSubmit,
  nextTab,
  setActiveKey,
}) => {
  const handleFormSubmit = (values: any) => {
    console.log(values);
    onSubmit({ eContent: values });
    setActiveKey(nextTab);
  };

  return (
    <div>
      <div className="bg-[#4e44b5] px-2 pt-1 pb-[2px] mb-2 rounded-md">
        <Typography.Title level={2} className="text-white">
          <span className="text-white"> E Content</span>
        </Typography.Title>
      </div>
      <div className="w-full bg-[#7fc4fb] p-2">
        <Form onFinish={handleFormSubmit} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="E-Content's Title Developed" name="title">
                <Input placeholder="Title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Domain" name="domain">
                <Input placeholder="Domain" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Title E-Content Developed For"
                name="developedFor"
              >
                <Radio.Group>
                  <Radio style={{ display: "block" }} value="e-PG-Pathshala">
                    e-PG-Pathshala
                  </Radio>
                  <Radio
                    style={{ display: "block" }}
                    value="CEC (Under Graduate)"
                  >
                    CEC (Under Graduate)
                  </Radio>
                  <Radio style={{ display: "block" }} value="SWAYAM">
                    SWAYAM
                  </Radio>
                  <Radio style={{ display: "block" }} value="MOOCs platform">
                    MOOCs platform
                  </Radio>
                  <Radio
                    style={{ display: "block" }}
                    value="NPTEL/NMEICT/any other Government initiatives"
                  >
                    NPTEL/NMEICT/any other Government initiatives
                  </Radio>
                  <Radio style={{ display: "block" }} value="institutional LMS">
                    institutional LMS
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Uploaded Date" name="uploadedDate">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Duration" name="duration">
                <Input placeholder="Duration" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Link of the E-content" name="contentLink">
                <Input placeholder="Content Link" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Link of the relevant documents used"
                name="relevantDocumentsUsed"
              >
                <TextArea rows={4} placeholder="Description" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit form
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EContent;
