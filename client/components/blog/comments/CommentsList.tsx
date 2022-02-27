import { Avatar, List } from 'antd';
import { FC } from 'react';

import { IComment } from '../../../types/interfaces';
import classes from '../../../styles/CommentsList.module.scss';

interface IProps {
  comments: IComment[];
}

const CommentsList: FC<IProps> = ({ comments }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={comments}
      className={classes.list}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://joeschmoe.io/api/v1/${item.id}`} />}
            title={item.name}
            description={item.body}
          />
        </List.Item>
      )}
    />
  );
};

export default CommentsList;