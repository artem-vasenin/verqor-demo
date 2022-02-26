import { FC, useState } from 'react';
import Head from 'next/head';
import { Card, Col, Empty, message, Row } from 'antd';
import {GetServerSideProps} from "next";

import MainLayout from '../../components/layouts/MainLayout';
import blogService from '../../services/blog.service';
import { IComment, IPost } from '../../types/interfaces';
import classes from '../../styles/Post.module.scss';
import AddComment from '../../components/blog/comments/AddComment';

interface IProps {
  post: IPost | null;
}

const Post: FC<IProps> = ({ post }) => {
  const [comments, setComments] = useState<IComment[]>(post?.comments ?? []);

  const handleCommentCreate = async (comment: IComment) => {
    try {
      const newComment = await blogService.createComment(comment);
      setComments([...comments, newComment]);
      message.success('New comment has been created');
    } catch (e) {
      message.error('Comment is not created');
    }
  }

  return post ? (
    <MainLayout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Row>
        <Col span={24} className={classes.post}>
          <Card
            title={post.title}
            bordered={false}
            className={classes.post__card}
          >
            {post.body}
          </Card>
        </Col>

        <Col span={24} md={{ span: 18, offset: 4 }}>
          <Card
            title={null}
            bordered={false}
            className={classes.post__card}
          >
            <AddComment
              postId={post.id}
              onSubmit={handleCommentCreate}
            />
          </Card>
        </Col>
      </Row>
    </MainLayout>
  ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = params && params.id ? await blogService.getPost(+params.id) : null;
  return { props: { post } };
}