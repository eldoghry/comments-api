// data access
import makeComment from '../comment/index.js';

export default function makeAddComment(dbConnection) {
  return function addComment(commentInfo) {
    const comment = makeComment(commentInfo);

    console.log('Comment:', comment);

    return dbConnection.insert({
      id: comment.getId(),
      author: comment.getAuthor(),
      text: comment.getText(),
      postId: comment.getPostId(),
      replyToId: comment.getReplyToId(),
      createdOn: comment.getCreatedOn(),
      modifiedOn: comment.getModifiedOn(),
      publised: comment.isPublished(),
    });
  };
}
