import { FC, useState } from 'react';
import Head from 'next/head';
import { PlusOutlined } from '@ant-design/icons';
import { Col, Row, Typography, message, Empty, Button, Tooltip } from 'antd';

import { IPost, IPostCreate, IPostEdit } from '../../types/interfaces';
import blogService from '../../services/blog.service';
import MainLayout from '../../components/layouts/MainLayout';
import classes from '../../styles/Blog.module.scss';
import CreatePost from '../../components/blog/create/CreatePost';
import EditPost from '../../components/blog/edit/EditPost';
import ShowPostList from '../../components/blog/list/ShowPostList';

const Blog: FC<{ posts: IPost[] }> = ({ posts }) => {
  const { Title } = Typography;
  const [editablePost, setEditablePost] = useState<IPost | null>(null);
  const [isShowPostCreateModal, setIsShowPostCreateModal] = useState(false);
  const [isShowPostEditModal, setIsShowPostEditModal] = useState(false);

  /** Show modal form for create new post */
  const showCreateModalHandler = () => {
    console.log('showCreateModalHandler');
    setIsShowPostCreateModal(true);
  }

  /**
   * Get data and create new post
   * @param post - post`s data
   */
  const handlePostCreate = (post: IPostCreate) => {
    console.log('handlePostCreate', post);
  }

  /** Cancel create form and close modal */
  const handlePostCreateCancel = () => {
    console.log('handlePostCreateCancel');
    setIsShowPostCreateModal(false);
  }

  /**
   * Get data and edit post
   * @param post - post`s data
   */
  const handlePostEdit = (post: IPostEdit) => {
    console.log('handlePostEdit', post);
  }

  /**
   * Get current post and open edit post`s modal
   * @param post - post`s data
   */
  const showPostEditModalHandler = (post: IPost) => {
    console.log('showPostEditModalHandler', post);
    setEditablePost(post);
    setIsShowPostEditModal(true);
  }

  /** Cancel edit form and close modal */
  const handlePostEditCancel = () => {
    console.log('handlePostEditCancel');
    setIsShowPostEditModal(false);
  }

  /**
   * Delete selected post
   * @param id - post`s identifier
   */
  const onPostDelete = async (id: number) => {
    try {
      const post: IPost = await blogService.deletePost(id);
      message.success(`Post "${post.title}" is deleted`);
    } catch (e) {
      message.error('Post is not deleted');
    }
  }

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
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined />}
                  size="small"
                  onClick={showCreateModalHandler}
                />
              </Tooltip>
            </div>
          </Typography>

          {
            posts && posts.length ? (
              <ShowPostList
                posts={posts}
                onEdit={showPostEditModalHandler}
                onDelete={onPostDelete}
              />
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )
          }
        </Col>
      </Row>

      <CreatePost
        show={isShowPostCreateModal}
        onCreate={handlePostCreate}
        onChancel={handlePostCreateCancel}
      />

      <EditPost
        show={!!(isShowPostEditModal && editablePost)}
        post={editablePost}
        onEdit={handlePostEdit}
        onChancel={handlePostEditCancel}
      />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts: IPost[] = await blogService.getList();
  return { props: { posts } };
}

export default Blog;