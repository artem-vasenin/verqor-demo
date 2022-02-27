import { FC, useState } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';
import { Card, Col, Empty, message, Row, Typography, Divider } from 'antd';
import {GetServerSideProps} from "next";

import MainLayout from '../../components/layouts/MainLayout';
import blogService from '../../services/blog.service';
import { IComment, IPost } from '../../types/interfaces';
import classes from '../../styles/Post.module.scss';
import AddComment from '../../components/blog/comments/AddComment';
import CommentsList from '../../components/blog/comments/CommentsList';

interface IProps {
  post: IPost | null;
}

const Post: FC<IProps> = ({ post }) => {
  const { Title } = Typography;
  const [comments, setComments] = useState<IComment[]>(post?.comments || []);
  const [loading, setLoading] = useState(false);

  const handleCommentCreate = async (comment: IComment) => {
    setLoading(true);
    try {
      const newComment = await blogService.createComment(comment);
      console.log('handleCommentCreate', newComment);
      setComments((prev) => [newComment, ...prev]);
      message.success('New comment has been created');
    } catch (e: any) {
      console.log('handleCommentCreate', e);
      message.error(e);
    } finally {
      setLoading(false);
    }
  }

  return post ? (
    <MainLayout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Row>
        <Col span={24} className={classes.post}>
          <Typography>
            <div className={classes.heading}>
              <Title level={1}>{post.title}</Title>
            </div>
          </Typography>

          <Card
            title={null}
            bordered={false}
            className={classes.post__card}
          >
            {parse(post.body)}
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
              loading={loading}
            />
            {comments.length ? (
              <>
                <Divider />
                <CommentsList comments={comments} />
              </>
            ) : null}
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