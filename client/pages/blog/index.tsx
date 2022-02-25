import Head from 'next/head';
import Link from 'next/link';
import { Col, Row, Typography, List, Skeleton, Empty } from 'antd';

import { IPost } from 'types/interfaces';
import blogService from '../../services/blog.service';
import MainLayout from '../../components/layouts/MainLayout';
import { FC } from 'react';

const Blog: FC<{ posts: IPost[] }> = ({ posts }) => {
  const { Title } = Typography;

  console.log(posts);

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

          {
            posts && posts.length ? (
              <List>
                {
                  posts.map((post: IPost) => (
                    <List.Item>
                      <Skeleton title={false} loading={false} active>
                        <List.Item.Meta
                          title={<Link href={`/blog/${post.id}`}><a>{post.title}</a></Link>}
                          description={post.description}
                        />
                      </Skeleton>
                    </List.Item>
                  ))
                }
              </List>
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )
          }
        </Col>
      </Row>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts: IPost[] = await blogService.getList();
  return { props: { posts } };
}

export default Blog;