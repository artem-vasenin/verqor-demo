import { FC, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [postsList, setPostsList] = useState<IPost[]>(posts);
  const [loading, setLoading] = useState(false);
  const [editablePost, setEditablePost] = useState<IPost | null>(null);
  const [isShowPostCreateModal, setIsShowPostCreateModal] = useState(false);
  const [isShowPostEditModal, setIsShowPostEditModal] = useState(false);

  /** Show modal form for create new post */
  const showCreateModalHandler = (): void => {
    setIsShowPostCreateModal(true);
  }

  /**
   * Get data and create new post
   * @param post - post`s data
   */
  const handlePostCreate = async (post: IPostCreate): Promise<void> => {
    try {
      const newPost: IPost = await blogService.createPost(post);
      setPostsList([newPost, ...postsList]);
      message.success(`Post "${newPost.title}" is created`);
    } catch (e: any) {
      message.error(e);
    }
  }

  /** Cancel create form and close modal */
  const handlePostCreateCancel = (): void => {
    setIsShowPostCreateModal(false);
  }

  /**
   * Get data and edit post
   * @param post - post`s data
   */
  const handlePostEdit = async (post: IPostEdit): Promise<void> => {
    try {
      const newPost: IPost = await blogService.updatePost(post);
      const updatedPosts = [...postsList].map((item: IPost) => {
        return item.id === newPost.id ? newPost : item;
      })
      setPostsList(updatedPosts);
      message.success(`Post "${newPost.title}" is updated`);
    } catch (e: any) {
      message.error(e);
    }
  }

  /**
   * Get current post and open edit post`s modal
   * @param post - post`s data
   */
  const showPostEditModalHandler = (post: IPost): void => {
    setEditablePost(post);
    setIsShowPostEditModal(true);
  }

  /** Cancel edit form and close modal */
  const handlePostEditCancel = (): void => {
    setEditablePost(null);
    setIsShowPostEditModal(false);
  }

  /**
   * Delete selected post
   * @param id - post`s identifier
   */
  const onPostDelete = async (id: number): Promise<void> => {
    try {
      const post: IPost = await blogService.deletePost(id);
      setPostsList(postsList.filter((post: IPost) => post.id !== id))
      message.success(`Post "${post.title}" is deleted`);
    } catch (e: any) {
      message.error(e);
    }
  }

  /**
   * Go to post`s details
   * @param id - post`s identifier
   */
  const onDetails = async (id: number): Promise<void> => {
    await router.push(`/blog/${id}`);
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
            postsList && postsList.length ? (
              <ShowPostList
                posts={postsList}
                onEdit={showPostEditModalHandler}
                onDelete={onPostDelete}
                onDetails={onDetails}
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
        loading={loading}
      />

      <EditPost
        show={!!(isShowPostEditModal && editablePost)}
        post={editablePost}
        onEdit={handlePostEdit}
        onChancel={handlePostEditCancel}
        loading={loading}
      />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts: IPost[] = await blogService.getList();
  return { props: { posts } };
}

export default Blog;