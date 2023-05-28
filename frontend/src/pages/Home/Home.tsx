import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Image, MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { info } from "autoprefixer";
import { getRouteName } from "../../data/routeUtils";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Add/Edit data",
    "dashboard",
    <div className="-ml-3 pl-0">
      <Image
        src={"../../../public/icon/edit.png"}
        width={40}
        height={40}
        preview={false}
      />
    </div>
  ),
  getItem(
    "Report Analysis Data",
    "analytics",
    <div className="-ml-3 pl-0">
      <Image
        src={"../../../public/icon/report.png"}
        width={40}
        height={40}
        preview={false}
      />
    </div>
  ),
  getItem(
    "Search",
    "search",
    <div className="-ml-3 pl-0">
      <Image
        src={"../../../public/icon/search.png"}
        width={40}
        height={40}
        preview={false}
      />
    </div>
  ),

  getItem(
    "View Data",
    "view_data",
    <div className="-ml-3 pl-0">
      <Image
        src={"../../../public/icon/view.png"}
        width={40}
        height={40}
        preview={false}
      />
    </div>
  ),
];

export const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const routeName = getRouteName();
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        // collapsible
        collapsed={true}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-blue-900"
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <img src="../public/icon/logo.png" width={50} height={50}></img>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(info) => {
            if (info.key === "dashboard") {
              navigate("/");
            } else if (info.key === "search") {
              navigate("/search");
            } else if (info.key === "analytics") {
              navigate("/analytics");
            }
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="text-white  p-2 flex items-center pl-6 justify-between bg-[#4e44b5]">
          <div className="text-xl font-bold">{routeName}</div>
          <div className="text-lg mr-4">
            <UserOutlined />
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
