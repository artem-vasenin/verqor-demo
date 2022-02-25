import { FC } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/es/interface';

import classes from '../../styles/MainLayout.module.scss';

const MainLayout:FC<{children: any}> = ({ children }) => {
  const router = useRouter();
  const { Header, Footer, Content } = Layout;

  /**
   * Menu router
   * @param e - menu info event
   */
  const handleClick = (e: MenuInfo) => {
    router.push(e.key);
  }

  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <Menu
          onClick={handleClick}
          theme="dark"
          mode="horizontal"
          selectedKeys={[router.pathname]}
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/blog">Blog</Menu.Item>
        </Menu>
      </Header>
      <Content className={classes.content}>{children}</Content>
      <Footer className={classes.footer}>
        &copy; Verqor {(new Date()).getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MainLayout;