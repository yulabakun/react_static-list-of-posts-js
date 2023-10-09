import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { NoCommentsMessage } from '../NoCommentsMessage';

export const PostInfo = ({ post }) => {
  const {
    body,
    title,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length !== 0
        ? <CommentList comments={comments} />
        : <NoCommentsMessage />
      }
    </div>
  );
};