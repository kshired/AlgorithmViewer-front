import { Breadcrumb, Layout, Menu } from 'antd';
import { BaekjoonIcon, ProgrammersIcon } from '../icons/Icon';
import React, { useState } from 'react';
import Viewer from './Viewer';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Content, Footer, Sider } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [site, setSite] = useState('');
  const [number, setNumber] = useState(null);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" style={{ textAlign: 'center' }}>
          {collapsed ? 'A.V.' : 'Algorithm Viewer'}
        </div>
        <Menu theme="dark" mode="vertical">
          <SubMenu
            key="1"
            title="Baekjoon"
            icon={<BaekjoonIcon style={{ color: 'white' }} />}
          >
            {[...Array(40)].map((x, i) => (
              <Menu.Item
                key={i + 2}
                onClick={() => {
                  setSite('Baekjoon');
                  setNumber(i + 2);
                }}
              >
                {i + 2}
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="42" title="Programmers" icon={<ProgrammersIcon />}>
            {[...Array(40)].map((x, i) => (
              <Menu.Item
                key={i + 43}
                onClick={() => {
                  setSite('Programmers');
                  setNumber(i + 43);
                }}
              >
                {i + 43}
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{site}</Breadcrumb.Item>
            <Breadcrumb.Item>{number}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Viewer />
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