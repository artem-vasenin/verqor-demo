import React, { FC } from 'react';
import Link from 'next/link';
import { Badge, Button, List, Skeleton, Tag, Tooltip } from 'antd';
import { CommentOutlined, DeleteOutlined, EditOutlined, ReadOutlined } from '@ant-design/icons';

import classes from '../../../styles/Blog.module.scss';
import { IPost } from '../../../types/interfaces';

interface IProps {
  posts: IPost[];
  onEdit: (post: IPost) => void;
  onDelete: (id: number) => void;
  onDetails: (id: number) => void;
}

const ShowPostList: FC<IProps> = ({ posts , onEdit, onDelete, onDetails }) => {
  const actions = (post: IPost): React.ReactNode[] => {
    const list = [];

    if (post.comments && post.comments.length) {
      list.push(
        <Tooltip placement="top" title="Comments" color="blue">
          <Tag
            icon={<CommentOutlined />}
            color={post.comments.length ? "processing" : "default"}
          >
            {post.comments.length}
          </Tag>
        </Tooltip>
      );
    }
    list.push(
      <Tooltip placement="top" title="Read more" color="gray">
        <Button
          type="default"
          shape="circle"
          icon={<ReadOutlined />}
          size="small"
          onClick={() => onDetails(post.id)}
        />
      </Tooltip>
    );
    list.push(
      <Tooltip placement="top" title="Edit post" color="blue">
        <Button
          type="primary"
          shape="circle"
          icon={<EditOutlined />}
          size="small"
          onClick={() => onEdit(post)}
        />
      </Tooltip>
    );
    list.push(
      <Tooltip placement="top" title="Delete post" color="red">
        <Button
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          size="small"
          onClick={() => onDelete(post.id)}
        />
      </Tooltip>
    );
    return list;
  }

  return (
    <List className={classes.list}>
      {
        posts.map((post: IPost) => (
          <Badge.Ribbon
            text={post.createdAt.split('T')[0]}
            key={post.id}
            placement="start"
          >
            <List.Item
              className={classes.list__item}
              actions={actions(post)}
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
          </Badge.Ribbon>
        ))
      }
    </List>
  );
}

export default ShowPostList;