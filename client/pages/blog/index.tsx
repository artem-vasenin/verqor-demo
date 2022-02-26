import { FC, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Col, Row, Typography, List, Skeleton, Empty, Button, Tooltip, Modal } from 'antd';

import { IPost } from '../../types/interfaces';
import blogService from '../../services/blog.service';
import MainLayout from '../../components/layouts/MainLayout';
import classes from '../../styles/Blog.module.scss';
import CreatePost from '../../components/blog/create/CreatePost';
import EditPost from '../../components/blog/edit/EditPost';

const Blog: FC<{ posts: IPost[] }> = ({ posts }) => {
  const { Title } = Typography;

  return (
    <MainLayout>
      <Head>
        <title>Blog</title>
      </Head>

      <Row>
        <Col span={24}>
          <Typography>
            <div className={classes.heading}>
              <Title level={1}>Blog</Title>
              <Tooltip placement="top" title="Add new post" color="blue">
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size="small" />
              </Tooltip>
            </div>
          </Typography>

          {
            posts && posts.length ? (
              <List className={classes.list}>
                {
                  posts.map((post: IPost) => (
                    <List.Item
                      className={classes.list__item}
                      key={post.id}
                      actions={[
                        <Tooltip placement="top" title="Edit post" color="blue">
                          <Button type="primary" shape="circle" icon={<EditOutlined />} size="small" />
                        </Tooltip>,
                        <Tooltip placement="top" title="Delete post" color="red">
                          <Button danger shape="circle" icon={<DeleteOutlined />} size="small" />
                        </Tooltip>,
                      ]}
                    >
                      <Skeleton
                        title={false}
                        loading={false}
                        active
                        className={classes.list__skeleton}
                      >
                        <List.Item.Meta
                          title={
                            <Link href={`/blog/${post.id}`}>
                              <a>{post.title}</a>
                            </Link>
                          }
                          description={post.description}
                          className={classes.list__meta}
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

      <CreatePost />

      <EditPost />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts: IPost[] = await blogService.getList();
  return { props: { posts } };
}

export default Blog;