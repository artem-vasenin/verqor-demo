import MainLayout from '../../components/layouts/MainLayout';
import Head from 'next/head';
import { Col, Row, Typography, List, Skeleton } from 'antd';
import Link from 'next/link';

const Blog = () => {
  const { Title } = Typography;

  return (
    <MainLayout>
      <Head>
        <title>Blog</title>
      </Head>

      <Row>
        <Col span={24}>
          <Typography>
            <Title level={1}>Blog</Title>
          </Typography>

          <List>
            <List.Item>
              <Skeleton title={false} loading={false} active>
                <List.Item.Meta
                  title={<Link href="/"><a>Some publication title</a></Link>}
                  description="Ant Design, a design language for background applications"
                />
              </Skeleton>
            </List.Item>
          </List>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Blog;