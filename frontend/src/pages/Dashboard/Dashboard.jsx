import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center flex justify-center items-center h-full  ">
      {/* <Row> */}
      {/* <Col xs={20} sm={16} md={10} lg={8} xl={4}> */}
      <Card
        className="flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/form")}
      >
        <div>
          <Card className="w-[100px] flex justify-center items-center">
            <SearchOutlined />
          </Card>
          <div className="p-2">
            <Typography.Title level={5}>Add Data </Typography.Title>
          </div>{" "}
        </div>
      </Card>
      {/* </Col> */}
      {/* <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col> */}
      {/* </Row> */}
    </div>
  );
};
