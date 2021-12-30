import { Breadcrumb, Layout, Menu } from "antd";
import { BaekjoonIcon, ProgrammersIcon } from "../icons/Icon";
import React, { useEffect, useState } from "react";
import Viewer from "./Viewer";
import SubMenu from "antd/lib/menu/SubMenu";
import Logo from "./Logo";
import axios from "axios";

const { Content, Footer, Sider } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [site, setSite] = useState("");
  const [problem, setProblem] = useState("");
  const [programmers, setProgrammers] = useState([]);
  const [baekjoon, setBaekjoon] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/problems?site=PROGRAMMERS").then((res) => {
      setProgrammers(
        res.data.map((p) => {
          return {
            id: p.id,
            name: p.name.replaceAll("_", " "),
          };
        })
      );
    });
    axios.get("http://localhost:8080/problems?site=BAEKJOON").then((res) => {
      setBaekjoon(
        res.data.map((p) => {
          return {
            id: p.id,
            name: p.name,
          };
        })
      );
    });
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Logo collapsed={collapsed} />
        <Menu theme="dark" mode="vertical">
          <SubMenu
            key="1"
            title="Baekjoon"
            icon={<BaekjoonIcon style={{ color: "white" }} />}
          >
            {baekjoon.map((p) => (
              <Menu.Item
                key={p.id}
                onClick={() => {
                  setSite("Baekjoon");
                  setProblem(p.name);
                  setId(p.id);
                }}
              >
                {p.name}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="42" title="Programmers" icon={<ProgrammersIcon />}>
            {programmers.map((p) => (
              <Menu.Item
                key={p.id}
                onClick={() => {
                  setSite("Programmers");
                  setProblem(p.name);
                  setId(p.id);
                }}
              >
                {p.name}
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{site}</Breadcrumb.Item>
            <Breadcrumb.Item>{problem}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Viewer id={id} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Alogrithm Viewer ©2022 Created by Kshired
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
