import { Breadcrumb, Layout, Menu } from 'antd';
import { BaekjoonIcon, ProgrammersIcon, LeetCodeIcon } from '../icons/Icon';
import React, { useEffect, useState } from 'react';
import Viewer from './Viewer';
import SubMenu from 'antd/lib/menu/SubMenu';
import Logo from './Logo';
import axios from 'axios';

const { Content, Footer, Sider } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [site, setSite] = useState('');
  const [problem, setProblem] = useState('');
  const [programmers, setProgrammers] = useState([]);
  const [baekjoon, setBaekjoon] = useState([]);
  const [leetcode, setLeetcode] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/problems?site=PROGRAMMERS').then((res) => {
      setProgrammers(
        res.data.map((p) => {
          return {
            id: p.id,
            name: p.name.replaceAll('_', ' '),
          };
        })
      );
    });
    axios.get('http://localhost:8080/problems?site=BAEKJOON').then((res) => {
      const data = res.data.map((p) => {
        return {
          id: p.id,
          name: p.name,
        };
      });

      data.sort((a, b) => parseInt(a.name) - parseInt(b.name));
      setBaekjoon(data);
    });

    axios.get('http://localhost:8080/problems?site=LEETCODE').then((res) => {
      const data = res.data.map((p) => {
        return {
          id: p.id,
          name: p.name,
        };
      });

      data.sort((a, b) => parseInt(a.name) - parseInt(b.name));
      setLeetcode(data);
    });
  }, []);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Logo collapsed={collapsed} />
        <Menu theme="dark" mode="vertical">
          <SubMenu
            key="9997"
            title="Baekjoon"
            style={{ fontSize: '16px' }}
            icon={<BaekjoonIcon />}
          >
            {baekjoon.map((p) => (
              <Menu.Item
                key={p.id}
                onClick={() => {
                  setSite('Baekjoon');
                  setProblem(p.name);
                  setId(p.id);
                }}
              >
                {p.name}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="9998"
            title="Programmers"
            style={{ fontSize: '16px' }}
            icon={<ProgrammersIcon />}
          >
            {programmers.map((p) => (
              <Menu.Item
                key={p.id}
                onClick={() => {
                  setSite('Programmers');
                  setProblem(p.name);
                  setId(p.id);
                }}
              >
                {p.name}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="9999"
            title="LeetCode"
            style={{ fontSize: '16px' }}
            icon={<LeetCodeIcon />}
          >
            {leetcode.map((p) => (
              <Menu.Item
                key={p.id}
                onClick={() => {
                  setSite('LeetCode');
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
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
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
        <Footer style={{ textAlign: 'center' }}>
          Alogrithm Viewer ©2022 Created by Kshired
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
