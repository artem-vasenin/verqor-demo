import MainLayout from '../../components/layouts/MainLayout';
import Head from 'next/head';
import { Col, Row, Typography } from 'antd';

const Post = () => {
  const { Title } = Typography;

  return (
    <MainLayout>
      <Head>
        <title>Post</title>
      </Head>

      <Row>
        <Col span={24}>
          <Typography>
            <Title level={1}>Post</Title>
          </Typography>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Post;