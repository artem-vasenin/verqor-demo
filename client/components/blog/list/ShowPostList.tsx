import React, { FC } from 'react';
import Link from 'next/link';
import { Button, List, Skeleton, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import classes from '../../../styles/Blog.module.scss';
import { IPost } from '../../../types/interfaces';

interface IProps {
  posts: IPost[];
  onEdit: (post: IPost) => void;
  onDelete: (id: number) => void;
}

const ShowPostList: FC<IProps> = ({ posts , onEdit, onDelete }) => {
  return (
    <List className={classes.list}>
      {
        posts.map((post: IPost) => (
          <List.Item
            className={classes.list__item}
            key={post.id}
            actions={[
              <Tooltip placement="top" title="Edit post" color="blue">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  size="small"
                  onClick={() => onEdit(post)}
                />
              </Tooltip>,
              <Tooltip placement="top" title="Delete post" color="red">
                <Button
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                  size="small"
                  onClick={() => onDelete(post.id)}
                />
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
  );
};

export default ShowPostList;